import { usePortfolio } from "@/store/PortfolioStore";

export const PortfolioButton = ({ children, project = 99, className = '' }) => {

    const { currentProject, setCurrentProject, setIsChanging } = usePortfolio();

    const projectHandler = (project) => {
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
