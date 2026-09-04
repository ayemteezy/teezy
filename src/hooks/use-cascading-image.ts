import { useState } from "react";

/**
 * Tries a list of image URLs in order, advancing to the next one each time
 * the current candidate fails to load. Returns the URL to render and the
 * onError handler to wire into an <img>/Image component.
 *
 * Once the last candidate also fails, it stays there — there's no further
 * fallback to offer, so the element renders in its native broken-image state.
 */
export const useCascadingImage = (candidates: string[]) => {
  const [index, setIndex] = useState(0);

  const src = candidates[index];

  const onError = () => {
    setIndex((i) => Math.min(i + 1, candidates.length - 1));
  };

  return { src, onError };
};