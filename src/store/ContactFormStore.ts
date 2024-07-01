import { Value } from "react-phone-number-input";
import { create } from "zustand";

interface OpenFormState {
    isOpen: boolean
    openCloseForm: (Value: boolean) => void
}

export const useIsOpenForm = create<OpenFormState>((set) =>
    ({
        isOpen: false,
        openCloseForm: (value: boolean) => set(state => ({
            isOpen: value
        }))
    })
)