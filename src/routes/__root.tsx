import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";

import { SITE } from "@/constants/configs/site.config";
import { ModalProvider } from "@/providers/modal-provider";
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
				{ key: "charset", charSet: "utf-8" },
				{
					key: "viewport",
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{ title: dynamicTitle },
				{
					key: "description",
					name: "description",
					content: SITE.meta.description,
				},
				{
					key: "keywords",
					name: "keywords",
					content: SITE.meta.keywords.join(", "),
				},

				// Open Graph Keys
				{ key: "og:title", property: "og:title", content: dynamicTitle },
				{
					key: "og:description",
					property: "og:description",
					content: SITE.meta.description,
				},
				{
					key: "og:image",
					property: "og:image",
					content: `${SITE.meta.siteUrl}${SITE.meta.ogImage}`,
				},
				{ key: "og:url", property: "og:url", content: SITE.meta.siteUrl },
				{ key: "og:type", property: "og:type", content: "website" },

				// Twitter/X Keys
				{
					key: "twitter:card",
					name: "twitter:card",
					content: "summary_large_image",
				},
				{ key: "twitter:title", name: "twitter:title", content: dynamicTitle },
				{
					key: "twitter:description",
					name: "twitter:description",
					content: SITE.meta.description,
				},
				{
					key: "twitter:image",
					name: "twitter:image",
					content: `${SITE.meta.siteUrl}${SITE.meta.ogImage}`,
				},
				{
					key: "twitter:site",
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
				<ModalProvider />
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
