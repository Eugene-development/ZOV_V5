import { create } from "zustand";

const visibleActionModal = create((set) => ({
  currentVisibleActionModal: false,
  currentAction: [],
  openVisibleActionModal: (action: any) => {
    set(() => ({ currentAction: action }));
    set(() => ({ currentVisibleActionModal: true }));
  },
  closeVisibleActionModal: () =>
    set(() => ({ currentVisibleActionModal: false })),
}));

export const useActionStore = {
  visibleActionModal,
};
