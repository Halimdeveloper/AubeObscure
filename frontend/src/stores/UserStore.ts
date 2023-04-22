import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User } from "../models/User";

export const useUserStore = create()(
  devtools(
    persist(
      (set) => ({
        users: [] as User[],
        setUsers: (users: User[]) => set({ users }),
        currentUser: {} as User,
        setCurrentUser: (currentUser: User) => set({ currentUser }),
        //reset
        reset: () => set({ users: [], currentUser: {} }),
      }),
      {
        name: "User-storage",
      }
    )
  )
);
