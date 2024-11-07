import { create } from 'zustand';

const useStore = create((set) => ({
  superPeople: [],

  fetchSuperPeople: async () => {
    const URL = "https://superpeople-api.netlify.app/.netlify/functions/get-superpeople";
    try {
      const res = await fetch(URL);
      const data = await res.json();
      const randomPerson = data[Math.floor(Math.random() * data.length)];
      
      set((state) => ({ superPeople: [...state.superPeople, randomPerson] }));
    } catch (error) {
      console.error("Failed to fetch superpeople:", error);
    }
  },

  addSuperPerson: (person) => set((state) => ({
    superPeople: [...state.superPeople, person]
  })),
  
  removeSuperPerson: (name) => set((state) => ({
    superPeople: state.superPeople.filter(person => person.name !== name)
  })),

}));

export default useStore;
