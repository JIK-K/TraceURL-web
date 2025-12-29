import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserDto } from "../dtos/user.dto";

interface UserState {
  user: UserDto | null;
  setUser: (user: UserDto | null) => void;
  updateUser: (partial: Partial<UserDto>) => void;
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      updateUser: (partial) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...partial } : null,
        })),
    }),
    {
      name: "user-store",
    }
  )
);
