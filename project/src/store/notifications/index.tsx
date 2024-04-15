import { create } from "zustand";

const visibleNotification = create((set) => ({
    currentVisibleNotification: true,
    openVisibleNotification: () => set(() => ({ currentVisibleNotification: true })),
    closeVisibleNotification: () => set(() => ({ currentVisibleNotification: false })),
}));

export const useNotificationStore = {
    visibleNotification,
};
