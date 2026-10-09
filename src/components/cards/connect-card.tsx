import { useNavigate } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { ArrowRightIcon } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { Loop } from "@/components/common/loop";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const ConnectCard = () => {
	const navigate = useNavigate();

	return (
		<Card
			onClick={() => navigate({ to: "/contact" })}
			className="group relative col-span-7 min-h-70 cursor-pointer border bg-transparent p-0 text-center ring-0 md:col-span-1 lg:col-span-5"
		>
			<Loop className="absolute top-0 left-1/2 w-250 max-w-none -translate-x-1/2 text-muted opacity-100 duration-0 group-hover:text-blue-500 group-hover:opacity-25 group-hover:duration-1500 group-hover:ease-in-out" />
			{/* fade in bottom right */}
			<div
				aria-hidden
				className="pointer-events-none absolute -right-50 -bottom-50 z-15 size-100 rounded-full bg-blue-400/10 opacity-0 blur-2xl transition-all duration-200 ease-in-out group-hover:opacity-100 dark:bg-white/5"
			/>
			<Button
				variant="secondary"
				size="icon"
				className="transform-flat pointer-events-none absolute right-4 bottom-14 z-15 translate-y-full rounded-full p-5 shadow-xs transition-all duration-50 ease-out hover:bg-secondary group-hover:translate-y-0 group-hover:opacity-100 lg:bottom-4 lg:opacity-0"
			>
				<ArrowRightIcon className="size-4" />
			</Button>
			{/* fade in sides */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-y-0 left-0 z-5 w-25 bg-linear-to-r from-background to-transparent lg:w-75"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-y-0 right-0 z-5 w-25 bg-linear-to-l from-background to-transparent lg:w-75"
			/>
			{/* images */}
			<Image
				src="/images/person1.png"
				width={50}
				height={50}
				className="absolute top-42 left-1/2 -translate-x-34 rounded-full border border-blue-400 shadow transition-all ease-in-out group-hover:opacity-100 group-hover:duration-300 lg:opacity-0"
			/>
			<Image
				src="/images/person2.png"
				width={50}
				height={50}
				className="absolute top-2 left-1/2 -translate-x-28 rounded-full border border-blue-400 shadow transition-all ease-in group-hover:opacity-500 group-hover:delay-100 group-hover:duration-300 lg:opacity-0"
			/>
			<Image
				src="/images/person3.png"
				width={50}
				height={50}
				className="absolute top-42 left-1/2 translate-x-20 rounded-full border border-blue-400 shadow transition-all ease-in group-hover:opacity-500 group-hover:delay-200 group-hover:duration-300 lg:opacity-0"
			/>
			<Image
				src="/images/person4.png"
				width={40}
				height={40}
				className="absolute top-4 left-1/2 -translate-x-68 rounded-full border border-blue-400 shadow transition-all ease-in group-hover:opacity-500 group-hover:delay-300 group-hover:duration-300 lg:opacity-0"
			/>
			<Image
				src="/images/person5.png"
				width={40}
				height={40}
				className="absolute top-4 left-1/2 translate-x-60 rounded-full border border-blue-400 shadow transition-all ease-in group-hover:opacity-500 group-hover:delay-300 group-hover:duration-300 lg:opacity-0"
			/>
			<CardHeader className="absolute bottom-4 z-10 w-full">
				<p className="font-mono text-muted-foreground text-xs uppercase transition-colors duration-500 ease-in group-hover:text-blue-400">
					from idea to product
				</p>
				<CardTitle className="text-foreground/85 text-lg">
					Turning complex requirements into simple experiences.
				</CardTitle>
			</CardHeader>
			{/* center logo */}
			<div className="absolute top-17 left-1/2 h-fit w-24 -translate-x-1/2 rounded-full border-2 bg-background p-2 transition-colors duration-500 ease-in-out group-hover:border-blue-400">
				<Logo />
			</div>
		</Card>
	);
};
