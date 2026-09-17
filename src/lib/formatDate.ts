import { format, isSameYear, parseISO } from "date-fns";
import type { Company, ExperienceDate, Role } from "@/types/experience";

export const formatDate = (dateStr: string) =>
	format(parseISO(dateStr), "MMM yyyy");

export const formatSpecificDate = (dateStr: string) =>
	format(parseISO(dateStr), "MMM dd, yyyy");

export const formatRoleDateRange = (date: Role["date"]) => {
	if (!date.end) return `${formatDate(date.start)} – Present`;

	const sameYear = isSameYear(parseISO(date.start), parseISO(date.end));
	const start = sameYear
		? format(parseISO(date.start), "MMM")
		: formatDate(date.start);

	return `${start} – ${formatDate(date.end)}`;
};

export const formatExperienceDate = (value: string) => {
	const date = new Date(`${value}-01`);

	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		year: "numeric",
	}).format(date);
};

export const formatDateRange = (date: ExperienceDate) => {
	const start = formatExperienceDate(date.start);
	const end = date.end ? formatExperienceDate(date.end) : "Present";

	return `${start} — ${end}`;
};

export const getExperienceDuration = (date: ExperienceDate) => {
	const start = new Date(`${date.start}-01`);

	const end = date.end ? new Date(`${date.end}-01`) : new Date();

	let months =
		(end.getFullYear() - start.getFullYear()) * 12 +
		(end.getMonth() - start.getMonth());

	// Prevent negative/invalid durations
	months = Math.max(months, 0);

	const years = Math.floor(months / 12);
	const remainingMonths = months % 12;

	const parts: string[] = [];

	if (years > 0) {
		parts.push(`${years} yr${years !== 1 ? "s" : ""}`);
	}

	if (remainingMonths > 0) {
		parts.push(`${remainingMonths} mo${remainingMonths !== 1 ? "s" : ""}`);
	}

	return parts.length > 0 ? parts.join(" ") : "< 1 mo";
};

export const getCompanyWorkDuration = (company: Company) => {
	if (!company.roles.length) return "0 mos";

	const starts = company.roles.map((role) => new Date(`${role.date.start}-01`));

	const ends = company.roles.map((role) =>
		role.date.end ? new Date(`${role.date.end}-01`) : new Date(),
	);

	const start = new Date(Math.min(...starts.map((date) => date.getTime())));

	const end = new Date(Math.max(...ends.map((date) => date.getTime())));

	const months =
		(end.getFullYear() - start.getFullYear()) * 12 +
		(end.getMonth() - start.getMonth());

	const years = Math.floor(months / 12);
	const remainingMonths = months % 12;

	if (years && remainingMonths) {
		return `${years} yr ${remainingMonths} mos`;
	}

	if (years) {
		return `${years} yr`;
	}

	return `${remainingMonths} mos`;
};
