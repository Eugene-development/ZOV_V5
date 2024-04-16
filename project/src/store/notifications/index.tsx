import { create } from "zustand";

const visibleNotification = create((set) => ({
    currentVisibleNotification: false,
    currentNotification: {},
    openVisibleNotification: () => set(() => ({ currentVisibleNotification: true })),
    closeVisibleNotification: () => set(() => ({ currentVisibleNotification: false })),
    setCurrentNotification: (notification: any) => set(() => ({ currentNotification: notification }))
}));

export const useNotificationStore = {
    visibleNotification,
};
