import { create } from 'zustand'

export const appStore = create((set) => ({
  country: 'india',
  updateCountry: (newCountry: string) => set({ country: newCountry }),
}))