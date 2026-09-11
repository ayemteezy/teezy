import { HackathonModal } from "@/components/modals/hackathon-modal";
import { RecornitionModal } from "@/components/modals/recognition-modal";

export const ModalProvider = () => {
	return (
		<>
			<HackathonModal />
			<RecornitionModal />
		</>
	);
};
