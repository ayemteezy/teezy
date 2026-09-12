// components/modals/hackathon-modal.tsx

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { AWARDS } from "@/constants/awards";
import { useModalStore } from "@/store/modal-store";
import { ModalCard } from "../common/modal-card";

export const RecognitionModal = () => {
	const { active, close } = useModalStore();
	const isOpen = active === "recognitions";

	if (!isOpen) return null;

	return (
		<Dialog open onOpenChange={(open) => !open && close()}>
			<DialogContent>
				<DialogHeader className="py-2">
					<span className="text-muted-foreground text-xs uppercase">
						awards
					</span>
					<DialogTitle className="font-pixel text-xl">
						Recognition for meaningful work
					</DialogTitle>
					<DialogDescription className="font-sans text-sm">
						A few recognitions and achievements that reflect my dedication,
						skills, and impact of my work.
					</DialogDescription>
				</DialogHeader>{" "}
				<div className="space-y-2">
					{AWARDS.map((award) => (
						<ModalCard
							key={award.title}
							title={award.title}
							description={award.description}
							date={award.year}
							featured={award.featured}
						/>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
};
