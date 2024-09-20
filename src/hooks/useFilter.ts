import { create } from "zustand";

interface Filter {
  type: string;
  price: string;
  search: string;
}

interface Store {
  filter: Filter;
  setFilter: (newFilter: Partial<Filter>) => void;
  resetFilter: () => void;
  getFilterFromLocalStorage: () => void;
  removeFilterFromLocalStorage: () => void;
}

const useFilter = create<Store>((set) => ({
  filter: {
    type: "",
    price: "",
    search: "",
  },
  setFilter: (newFilter) => {
    const updatedFilter = { ...newFilter };
    set((state) => {
      const newFilterState = { ...state.filter, ...updatedFilter };
      localStorage.setItem("filter", JSON.stringify(newFilterState)); // Lưu vào localStorage
      return { filter: newFilterState };
    });
  },
  resetFilter: () => set({ filter: { type: "", price: "", search: "" } }),
  getFilterFromLocalStorage: () => {
    const savedFilter = localStorage.getItem("filter");
    if (savedFilter) {
      set({ filter: JSON.parse(savedFilter) });
    }
  },
  removeFilterFromLocalStorage: () => {
    localStorage.removeItem("filter");
  },
}));
export default useFilter;