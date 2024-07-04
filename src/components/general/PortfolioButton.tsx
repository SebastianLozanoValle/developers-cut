import { usePortfolio } from "@/store/PortfolioStore";
import { ReactNode } from "react";

interface PortfolioButtonProps {
  children: ReactNode;
  project?: number;
  className?: string;
}

export const PortfolioButton: React.FC<PortfolioButtonProps> = ({ children, project = 99, className = '' }) => {

    const { currentProject, setCurrentProject, setIsChanging } = usePortfolio();

    const projectHandler = (project: number) => {
        if (currentProject !== 100) {
            setIsChanging(true);
            setTimeout(() => {
                setCurrentProject(project);
                setIsChanging(false);
            }, 250);
        } else {
            setCurrentProject(project);
        }
    }

    return (
        <button onClick={() => projectHandler(project)} className={`p-[45px] ${className}`}>
            <div className={`hexagon-item ${currentProject === project ? 'active-project' : ''}`}>
                <span className="hexagon-item-content">
                    {children}
                </span>
            </div>
        </button>
    )
}
