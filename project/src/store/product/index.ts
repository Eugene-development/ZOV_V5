import { create } from "zustand";

const visibleProductModal = create((set) => ({
  currentVisibleProductModal: false,
  currentProduct: [],
  openVisibleProductModal: (item: any) => {
    set(() => ({ currentProduct: item }));
    set(() => ({ currentVisibleProductModal: true }));
  },
  closeVisibleProductModal: () =>
    set(() => ({ currentVisibleProductModal: false })),
}));

const similarProducts = create((set) => ({
  currentSimilarProducts: [],
  showSimilarProducts: (param: any) => {
    set(() => ({ currentSimilarProducts: param }));
  },
}));

export const useProductStore = {
  visibleProductModal,
  similarProducts
};
