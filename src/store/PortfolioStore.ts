import { create } from "zustand";

interface PortfolioState {
    currentProject: number
    setCurrentProject: (Value: number) => void
    isChanging: boolean
    setIsChanging: (Value: boolean) => void
}

export const usePortfolio = create<PortfolioState>((set) =>
    ({
        currentProject: 100,
        setCurrentProject: (value: number) => set(state => ({
            currentProject: state.currentProject !== value ? value : 100
        })),
        isChanging: false,
        setIsChanging: (value: boolean) => set(state => ({
            isChanging: value
        })),
    })
)