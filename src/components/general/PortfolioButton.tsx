import { usePortfolio } from "@/store/PortfolioStore";
import Image from "next/image";
import { ReactNode } from "react";

interface PortfolioButtonProps {
//   children: ReactNode;
  project?: number;
  className?: string;
  src?: string;
}

export const PortfolioButton: React.FC<PortfolioButtonProps> = ({ src = "/imaginatrips.png", project = 99, className = '' }) => {

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
                    
                    <div className="">
                        <Image
                            src={src}
                            alt="websiteimage"
                            width={110}
                            height={10}
                            className="rounded"
                        />
                    </div>
                </span>
            </div>
        </button>
    )
}
