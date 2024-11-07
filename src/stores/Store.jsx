// store.js
import { create } from 'zustand';

  async function fetchData() {
    const URL = "https://superpeople-api.netlify.app/.netlify/functions/get-superpeople"
    let res = await fetch(URL)
    let data = await res.json()
    
  }

const useStore = create((set) => ({
  superPeople: [],

  fetchSuperPeople: async () => {
    const URL = "https://superpeople-api.netlify.app/.netlify/functions/get-superpeople"
    let res = await fetch(URL)
    let data = await res.json()

    const superPeople = data.map((person) => ({
      name: person.name,
      superpower: person.superpower,
    }))
    set({superPeople})
  }
}));



export default useStore;