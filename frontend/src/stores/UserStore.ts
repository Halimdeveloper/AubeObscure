import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User } from "../models/User";

interface UserState {
  users: User[];
  setUsers: (users: User[]) => void;
  currentUser: User;
  setCurrentUser: (currentUser: User) => void;
  reset: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        users: [] as User[],
        setUsers: (users: User[]) => set({ users }),
        currentUser: {} as User,
        setCurrentUser: (currentUser: User) => set({ currentUser }),
        //reset
        reset: () => set({ users: [], currentUser: {} as User }),
      }),
      {
        name: "User-storage",
      }
    )
  )
);
