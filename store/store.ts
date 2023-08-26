import create from 'zustand';

export const useStore = create((set) => ({
    data: [],
    setData: (data: any) => set({ data }),
    fetchData: async (url: RequestInfo | URL) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        set({ data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  }));