import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";

import { SITE } from "@/constants/configs/site.config";
import { ThemeProvider } from "@/providers/theme-provider";
// import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";
import { NotFound } from "./not-found";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: ({ matches }) => {
		const currentMatch = matches[matches.length - 1];
		const currentPath =
			(currentMatch?.pathname || "/").replace(/\/$/, "") || "/";

		const sectionName =
			currentPath === "/"
				? "Full Stack Developer"
				: currentPath.replace("/", "").charAt(0).toUpperCase() +
					currentPath.slice(2);

		const dynamicTitle = `Teezy — ${sectionName}`;

		return {
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{ title: dynamicTitle },
				{
					name: "description",
					content: SITE.meta.description,
				},
				{
					name: "keywords",
					content: SITE.meta.keywords.join(", "),
				},

				// Open Graph
				{ property: "og:title", content: dynamicTitle },
				{
					property: "og:description",
					content: SITE.meta.description,
				},
				{
					property: "og:image",
					content: `${SITE.meta.siteUrl}${SITE.meta.ogImage}`,
				},
				{ property: "og:url", content: SITE.meta.siteUrl },
				{ property: "og:type", content: "website" },

				// Twitter/X
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{ name: "twitter:title", content: dynamicTitle },
				{
					name: "twitter:description",
					content: SITE.meta.description,
				},
				{
					name: "twitter:image",
					content: `${SITE.meta.siteUrl}${SITE.meta.ogImage}`,
				},
				{
					name: "twitter:site",
					content: SITE.meta.twitterHandle,
				},
			],
			links: [
				{ rel: "stylesheet", href: appCss },
				{
					rel: "icon",
					type: "image/svg+xml",
					href: SITE.favicon.light,
					media: "(prefers-color-scheme: light)",
				},
				{
					rel: "icon",
					type: "image/svg+xml",
					href: SITE.favicon.dark,
					media: "(prefers-color-scheme: dark)",
				},
				{ rel: "icon", href: SITE.favicon.ico, sizes: "any" },
			],
		};
	},
	shellComponent: RootDocument,
	notFoundComponent: NotFound,
});

function RootDocument() {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="scroll-smooth antialiased">
				<ThemeProvider defaultTheme="light" storageKey="theme">
					<Outlet />
				</ThemeProvider>
				{/* <TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
						TanStackQueryDevtools,
					]}
				/> */}
				<Scripts />
			</body>
		</html>
	);
}
