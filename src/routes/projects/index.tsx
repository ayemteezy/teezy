import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div className="container mt-20">hello</div>;
}
