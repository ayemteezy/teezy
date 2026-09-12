import { HackathonModal } from "@/components/modals/hackathon-modal";
import { RecognitionModal } from "@/components/modals/recognition-modal ";

export const ModalProvider = () => {
	return (
		<>
			<HackathonModal />
			<RecognitionModal />
		</>
	);
};
