// generate-css.ts

import { createThemeCss } from "@tanstack/highlight/theme";
import { githubDarkTheme } from "@tanstack/highlight/themes/github-dark";
import { githubLightTheme } from "@tanstack/highlight/themes/github-light";
import fs from "fs";

const themeCss = createThemeCss({
	light: githubLightTheme,
	dark: githubDarkTheme,
	darkSelector: ".dark",
	codeBlockSelector: ".tm-code",
	lineNumbersSelector: ".tm-code--line-numbers",
});

fs.writeFileSync("./highlighter.css", themeCss);
console.log("✅ highlighter.css updated successfully!");
