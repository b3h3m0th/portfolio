import { create } from "zustand";

type WorksModalStore = {
  active: boolean;
  index: number;
  setModal: (modal: Pick<WorksModalStore, "active" | "index">) => void;
};

export const useWorksModal = create<WorksModalStore>((set) => ({
  active: false,
  index: 0,
  setModal: (modal) => set({ ...modal }),
}));
