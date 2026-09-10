import { Link, useRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
	const router = useRouter();

	return (
		<main className="grid min-h-screen place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
			<div className="text-center">
				<p className="inline-block select-none rounded-md border border-border/40 bg-muted/50 px-3 py-1.5 font-bold font-pixel text-[10px] text-muted-foreground uppercase tracking-[0.25em] sm:text-xs">
					[ ERROR_404 ]
				</p>

				<h1 className="mt-6 select-none font-black text-4xl text-foreground leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
					Lost in Space.
				</h1>
				<p className="mx-auto mt-5 max-w-xs font-mono text-muted-foreground text-xs leading-relaxed tracking-wide sm:mt-8 sm:max-w-md sm:text-sm">
					The page you are looking for doesn't exist, has been moved, or hasn't
					been built yet.
				</p>

				<div className="mt-10 flex items-center justify-center gap-x-4">
					<Button
						onClick={() => router.history.back()}
						size="lg"
						variant="outline"
						className="rounded-xl"
					>
						Go Back
					</Button>

					<Link to="/">
						<Button size="lg" className="rounded-xl">
							Return Home
						</Button>
					</Link>
				</div>
			</div>
		</main>
	);
}
