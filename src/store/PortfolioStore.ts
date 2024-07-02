import { create } from "zustand";

interface PortfolioState {
    currentProject: number
    setCurrentProject: (Value: number) => void
}

export const usePortfolio = create<PortfolioState>((set) =>
    ({
        currentProject: 100,
        setCurrentProject: (value: number) => set(state => ({
            currentProject: state.currentProject !== value ? value : 100
        }))
    })
)