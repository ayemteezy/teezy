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
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ title: SITE.meta.title },
			{ name: "description", content: SITE.meta.description },
			{ name: "keywords", content: SITE.meta.keywords.join(", ") },

			// Open Graph (Facebook, LinkedIn, Discord previews, etc.)
			{ property: "og:title", content: SITE.meta.title },
			{ property: "og:description", content: SITE.meta.description },
			{
				property: "og:image",
				content: `${SITE.meta.siteUrl}${SITE.meta.ogImage}`,
			},
			{ property: "og:url", content: SITE.meta.siteUrl },
			{ property: "og:type", content: "website" },

			// Twitter/X card
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: SITE.meta.title },
			{ name: "twitter:description", content: SITE.meta.description },
			{
				name: "twitter:image",
				content: `${SITE.meta.siteUrl}${SITE.meta.ogImage}`,
			},
			{ name: "twitter:site", content: SITE.meta.twitterHandle },
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
	}),
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
