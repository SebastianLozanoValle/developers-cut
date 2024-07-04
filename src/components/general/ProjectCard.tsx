import { usePortfolio } from "@/store/PortfolioStore"
import { motion } from "framer-motion"
import { ReactNode } from "react";
import { RxCross2 } from 'react-icons/rx';

interface ProjectCardProps {
  children: ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ children }) => {

    const {currentProject, isChanging, setCurrentProject, setIsChanging} = usePortfolio()

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
        <motion.div
            key={currentProject}
            initial={{ opacity: 0, translateX: -500, translateY: -500 }}
            animate={isChanging ? { opacity: 0, translateX: 500, translateY: 500 } : { opacity: 1, translateX: 0, translateY: 0 }}
            exit={{ opacity: 0, translateX: -500, translateY: -500 }}
            transition={{ duration: .25 }}
            className="flex flex-col gap-8"
        >
            <div className={`hexagon-card`}>
                <span className="hexagon-card-content">
                    <button onClick={() => projectHandler(100)}><RxCross2 /></button>
                 {children}
                </span>
            </div>
        </motion.div>
    )
}