import { create } from "zustand";
import { User } from "../models/User";

// Store pour les données de personnages
export const useUserStore = create((set) => ({
  users: [] as User[],
  setUsers: (users: User[]) => set({ users }),
  currentUser: {} as User,
  setCurrentUser: (currentUser: User) => set({ currentUser }),
}));
