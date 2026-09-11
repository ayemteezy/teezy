import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/store/modal-store";

export const RecornitionModal = () => {
	const { active, close } = useModalStore();
	const isOpen = active === "recognitions";

	if (!isOpen) return null;

	return (
		<Dialog open onOpenChange={(open) => !open && close()}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Recognitions</DialogTitle>
				</DialogHeader>
				hello
			</DialogContent>
		</Dialog>
	);
};
