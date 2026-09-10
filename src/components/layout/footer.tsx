export const Footer = () => {
	return (
		<div className="flex items-center justify-start border-t pt-4">
			<span className="font-mono text-[0.65625rem] text-muted-foreground">
				© {new Date().getFullYear()} Laurence Lester Cariño
			</span>
		</div>
	);
};
