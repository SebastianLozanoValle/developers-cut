import { usePortfolio } from "@/store/PortfolioStore"

export const PortfolioButton = ({ children, project = 99 }) => {

    const {currentProject, setCurrentProject} = usePortfolio()

    const projectHandler = (project: number) => {
        setCurrentProject(project)
        console.log('funcionando')
    }

    return (
        <button onClick={() => projectHandler(project)} className="p-[45px]">
            <div className={`hexagon-item ${currentProject == project && 'active-project'}`}>
                <span className="hexagon-item-content">
                    {children}
                </span>
            </div>
        </button>
    )
}