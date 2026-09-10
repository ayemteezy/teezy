import { createServerFn } from "@tanstack/react-start";
import { format, startOfMonth } from "date-fns";

interface WakaTimeGrandTotal {
	digital: string;
	hours: number;
	minutes: number;
	name: string;
	percent: number;
	text: string;
	total_seconds: number;
}

interface WakaTimeEntity {
	decimal: string;
	digital: string;
	hours: number;
	minutes: number;
	name: string;
	percent: number;
	text: string;
	total_seconds: number;
}

interface WakaTimeDaySummary {
	grand_total: WakaTimeGrandTotal;
	languages: WakaTimeEntity[];
	range: {
		date: string;
		end: string;
		start: string;
		text: string;
	};
}

interface WakaTimeSummariesResponse {
	data: WakaTimeDaySummary[];
	end: string;
	start: string;
}

interface TelemetryData {
	languages: { name: string; percent: number }[];
}

const MAX_LANGUAGES = 4;

export const getTelemetry = createServerFn({ method: "GET" }).handler(
	async (): Promise<TelemetryData> => {
		const apiKey = process.env.WAKATIME_API_KEY;
		if (!apiKey) {
			throw new Error(
				"Missing WAKATIME_API_KEY inside server environment variables.",
			);
		}

		const encodedToken = Buffer.from(`${apiKey}:`).toString("base64");

		const today = new Date();
		const endRange = format(today, "yyyy-MM-dd");
		const startRange = format(startOfMonth(today), "yyyy-MM-dd");

		// Endpoint format specified by https://wakatime.com/developers
		const url = `https://wakatime.com/api/v1/users/current/summaries?start=${startRange}&end=${endRange}`;
		const response = await fetch(url, {
			headers: {
				Authorization: `Basic ${encodedToken}`,
			},
		});

		if (response.status === 202) {
			// WakaTime returns 202 Accepted if the data is currently processing/empty
			return { languages: [] };
		}

		if (!response.ok) {
			throw new Error(`WakaTime API returned status code ${response.status}`);
		}

		const json = (await response.json()) as WakaTimeSummariesResponse;
		const daysData = json.data || [];

		const languageMap: Record<string, number> = {};
		let totalSeconds = 0;

		for (const day of daysData) {
			totalSeconds += day.grand_total?.total_seconds || 0;

			for (const lang of day.languages ?? []) {
				languageMap[lang.name] =
					(languageMap[lang.name] || 0) + lang.total_seconds;
			}
		}

		const sortedLanguages = Object.entries(languageMap)
			.map(([name, seconds]) => ({
				name,
				percent:
					totalSeconds > 0 ? Math.round((seconds / totalSeconds) * 100) : 0,
			}))
			.sort((a, b) => b.percent - a.percent);

		const topLanguages = sortedLanguages.slice(0, MAX_LANGUAGES);
		const otherPercent = sortedLanguages
			.slice(MAX_LANGUAGES)
			.reduce((sum, lang) => sum + lang.percent, 0);

		const finalLanguages =
			otherPercent > 0
				? [...topLanguages, { name: "Other", percent: otherPercent }]
				: topLanguages;

		return { languages: finalLanguages };
	},
);
