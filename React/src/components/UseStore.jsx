import { create } from "zustand";

const UseStore = create((set) => ({
  productos: [],
  addProducto: (producto) =>
    set((state) => ({
      productos: [...state.productos, producto],
    })),
}));

export { UseStore };
