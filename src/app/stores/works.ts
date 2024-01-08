import { create } from "zustand";

type WorksStore = {
  modal: { active: boolean; index: number };
  setModal: (modal: WorksStore["modal"]) => void;
};

export const useWorks = create<WorksStore>((set) => ({
  modal: { active: false, index: 0 },
  setModal: (modal) => set({ modal }),
}));
