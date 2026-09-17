import { createHighlighter } from "@tanstack/highlight/core";
import { css } from "@tanstack/highlight/languages/css";
import { ts } from "@tanstack/highlight/languages/ts";
import { tsx } from "@tanstack/highlight/languages/tsx";
import { createTanStackMarkdownHighlighter } from "@tanstack/highlight/markdown";
import { createThemeCss } from "@tanstack/highlight/theme";
import { githubDarkTheme } from "@tanstack/highlight/themes/github-dark";
import { githubLightTheme } from "@tanstack/highlight/themes/github-light";

export const baseHighlighter = createHighlighter({
	languages: [ts, tsx, css],
});

export const highlightMarkdownCode =
	createTanStackMarkdownHighlighter(baseHighlighter);

export const themeCss = createThemeCss({
	light: githubLightTheme,
	dark: githubDarkTheme,
	darkSelector: ".dark",
	codeBlockSelector: ".tm-code",
	lineNumbersSelector: ".tm-code--line-numbers",
});
