// store.js
import { create } from 'zustand';

  async function fetchData() {
    const URL = "https://superpeople-api.netlify.app/.netlify/functions/get-superpeople"
    let res = await fetch(URL)
    let data = await res.json()
    
  }

const useStore = create((set) => ({
  superPeople: [
    { name: "Taatus", superpower: "Autism" },
    { name: "Tiitus", superpower: "Smell" }
  ],
  addSuperPerson: (person) => set((state) => ({
    superPeople: [...state.superPeople, person],
  })),
}));



export default useStore;