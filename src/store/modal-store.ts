// store/modal-store.ts
import { create } from "zustand";

export type ModalType = "hackathons" | "recognitions";

interface ModalState {
	active: ModalType | null;
	open: (type: ModalType) => void;
	close: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
	active: null,
	open: (type) => set({ active: type }),
	close: () => set({ active: null }),
}));
