import { Progress } from "@/components/ui/progress";
import { languages } from "@/consts";

export const Languages = () => {
	return (
		<>
			<h4 className="text-[14px] font-semibold">Languages I Speak</h4>
			<div className="mt-2">
				{languages.map((language) => {
					let lvl;
					if (language.level <= 20) {
						lvl = "Beginner";
					} else if (language.level <= 40) {
						lvl = "Elementary";
					} else if (language.level <= 60) {
						lvl = "Conversational";
					} else if (language.level <= 80) {
						lvl = "Intermediate";
					} else if (language.level <= 95) {
						lvl = "Fluent";
					} else {
						lvl = "Native";
					}

					return (
						<div key={language.name} className="mb-4">
							<div className="flex items-center justify-between">
								<p className="text-[12px] font-semibold">{language.name}</p>
								<span className="text-[10px] text-muted-foreground">{lvl}</span>
							</div>
							<Progress value={language.level} />
						</div>
					);
				})}
			</div>
		</>
	);
};
