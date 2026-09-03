import { create } from "zustand";

type SidebarStore = {
	isOpen: boolean;
	toggleSidebar: () => void;
	closeSidebar: () => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
	isOpen: false,
	toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
	closeSidebar: () => set({ isOpen: false }),
}));
