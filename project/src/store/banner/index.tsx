import { create } from "zustand";

const visibleBanner = create((set) => ({
  currentVisibleBanner: true,
  closeVisibleBanner: () => set(() => ({ currentVisibleBanner: false })),
}));

export const useBannerStore = {
  visibleBanner,
};
