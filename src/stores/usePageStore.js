import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePageStore = create(
  persist(
    (set) => ({
      visitedPages: [],
      allPagesVisited: false,
      addVisitedPage: (page) =>
        set((state) => ({
          visitedPages: state.visitedPages.includes(page)
            ? state.visitedPages
            : [...state.visitedPages, page],
        })),
      setAllPagesVisited: () => set({ allPagesVisited: true }),
    }),
    {
      name: "pagesVisted store",
    }
  )
);

export default usePageStore;
