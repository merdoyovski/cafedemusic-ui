import { create } from "zustand";

interface ModalState {
  editItemModalOpen: boolean;
  addNewItemModalOpen: boolean;
  anyModalOpen: boolean;
  setEditItemModalOpen: () => void;
  setAddNewItemModalOpen: () => void;
}

export const useModal = create<ModalState>()((set) => ({
  editItemModalOpen: false,
  addNewItemModalOpen: false,
  anyModalOpen: false,

  setEditItemModalOpen: () =>
    set((state) => ({
      editItemModalOpen: !state.editItemModalOpen,
      anyModalOpen: !state.anyModalOpen,
    })),
  setAddNewItemModalOpen: () =>
    set((state) => ({
      addNewItemModalOpen: !state.addNewItemModalOpen,
      anyModalOpen: !state.anyModalOpen,
    })),
}));
