import { create } from "zustand";
import { persist } from "zustand/middleware";

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

const similarProducts = create(
  persist(
    (set) => ({
      currentSimilarProducts: [],
      showSimilarProducts: (param: any) => {
        set(() => ({ currentSimilarProducts: param }));
      },
    }),
    {
      name: "similar",
    },
  ),
);

const favoritesProducts = create(
  persist(
    (set) => ({
      currentFavoritesProducts: [],
      addToFavoritesProducts: (newProduct: any) => {
        set((state: any) => ({
          currentFavoritesProducts: [
            ...state.currentFavoritesProducts,
            newProduct,
          ],
        }));
      },
      removeFromFavoritesProducts: (id: any) => {
        set((state: any) => ({
          currentFavoritesProducts: state.currentFavoritesProducts.filter(
            (product: any) => product.id !== id,
          ),
        }));
      },
    }),
    {
      name: "favorites",
    },
  ),
);

export const useProductStore = {
  visibleProductModal,
  similarProducts,
  favoritesProducts,
};
