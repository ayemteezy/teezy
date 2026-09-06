import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stack/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div className="container mt-20">Hello "/stack/"!</div>;
}
