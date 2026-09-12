// components/modals/hackathon-modal.tsx

import { ModalCard } from "@/components/common/modal-card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { HACKATHONS } from "@/constants/hackathons";
import { useModalStore } from "@/store/modal-store";

export const HackathonModal = () => {
	const { active, close } = useModalStore();
	const isOpen = active === "hackathons";

	if (!isOpen) return null;

	return (
		<Dialog open onOpenChange={(open) => !open && close()}>
			<DialogContent className="gap-2">
				<DialogHeader className="py-2">
					<span className="text-muted-foreground text-xs uppercase">
						hackathons
					</span>
					<DialogTitle className="font-pixel text-xl">
						Building real solutions.
					</DialogTitle>
					<DialogDescription className="font-sans text-sm">
						I've participated in several hackathons, collaborating with talented
						teams to build impactful projects.
					</DialogDescription>
				</DialogHeader>
				<div className="space-y-2">
					{HACKATHONS.map((hackathon) => (
						<ModalCard
							key={hackathon.title}
							title={hackathon.title}
							description={hackathon.description}
							date={hackathon.year}
							featured={hackathon.featured}
						/>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
};
