import { create } from "zustand";

const usePageStore = create((set) => ({
  visitedPages: [],
  allPagesVisited: false,
  addVisitedPage: (page) =>
    set((state) => ({
      visitedPages: state.visitedPages.includes(page)
        ? state.visitedPages
        : [...state.visitedPages, page],
    })),
  setAllPagesVisited: () => set({ allPagesVisited: true }),
}));

export default usePageStore;
