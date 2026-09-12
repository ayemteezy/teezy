import { useEffect, useState } from "react";

const imageCache = new Map<string, string>();

export const useCascadingImage = (candidates: string[]) => {
	const [src, setSrc] = useState<string | null>(() => {
		return candidates.find((candidate) => imageCache.has(candidate)) ?? null;
	});

	useEffect(() => {
		let cancelled = false;

		const cached = candidates.find((candidate) => imageCache.has(candidate));

		if (cached) {
			setSrc(cached);
			return;
		}

		setSrc(null);

		const loadNext = (index: number) => {
			if (index >= candidates.length) {
				return;
			}

			const candidate = candidates[index];
			const image = new window.Image();

			image.onload = () => {
				imageCache.set(candidate, candidate);

				if (!cancelled) {
					setSrc(candidate);
				}
			};

			image.onerror = () => {
				loadNext(index + 1);
			};

			image.src = candidate;
		};

		loadNext(0);

		return () => {
			cancelled = true;
		};
	}, [candidates]);

	return {
		src,
	};
};
