import { create } from "zustand";

const visibleFormConsultation = create((set) => ({
  currentVisibleFormConsultation: false,
  openVisibleFormConsultation: () =>
    set(() => ({ currentVisibleFormConsultation: true })),
  closeVisibleFormConsultation: () =>
    set(() => ({ currentVisibleFormConsultation: false })),
}));

export const useFormsStore = {
  visibleFormConsultation,
};
