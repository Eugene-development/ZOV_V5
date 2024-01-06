import { create } from "zustand";

const visiblePromo = create((set) => ({
  currentVisiblePromo: false,
  openVisiblePromo: () => set(() => ({ currentVisiblePromo: true })),
  closeVisiblePromo: () => set(() => ({ currentVisiblePromo: false })),
}));

export const usePromoStore = {
  visiblePromo,
};
