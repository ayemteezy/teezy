import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
	eyebrow: string;
	title: string;
	as?: "h1" | "h2" | "h3";
	className?: string;
}

const splitTitle = (title: string) => {
	const words = title.trim().split(/\s+/);
	const last = words.pop() ?? "";
	// Keep trailing punctuation out of the gradient word
	const [, accent = "", punctuation = ""] =
		last.match(/^(.*?)([.,!?:;…]*)$/) ?? [];

	return { rest: words.join(" "), accent, punctuation };
};

export const SectionHeader = ({
	eyebrow,
	title,
	as: Heading = "h2",
	className,
}: SectionHeaderProps) => {
	const { rest, accent, punctuation } = splitTitle(title);

	return (
		<div
			className={cn(
				"mx-auto flex w-full max-w-3xl flex-col items-center gap-2 px-4 text-center sm:gap-3 sm:px-6",
				className,
			)}
		>
			<p className="font-mono font-semibold text-[0.65rem] text-muted-foreground uppercase tracking-[0.2em] sm:text-xs sm:tracking-widest">
				{eyebrow}
			</p>
			<Heading className="text-balance font-serif text-3xl text-foreground leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
				{rest && `${rest}\u00A0`}

				<TextAnimate
					accessible
					animation="blurIn"
					as="span"
					by="character"
					segmentClassName="-mx-[0.08em] -my-[0.1em] bg-[linear-gradient(135deg,#FF0080,#7928CA,#0070F3,#38bdf8,#FF0080)] bg-[length:200%_auto] bg-clip-text px-[0.08em] py-[0.1em] text-transparent italic"
					startOnView
				>
					{accent}
				</TextAnimate>
				{punctuation}
			</Heading>
		</div>
	);
};
