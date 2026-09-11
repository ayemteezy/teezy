import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/store/modal-store";

export const HackathonModal = () => {
	const { active, close } = useModalStore();
	const isOpen = active === "hackathons";

	if (!isOpen) return null;

	return (
		<Dialog open onOpenChange={(open) => !open && close()}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Hackathons</DialogTitle>
				</DialogHeader>
				hello
			</DialogContent>
		</Dialog>
	);
};
