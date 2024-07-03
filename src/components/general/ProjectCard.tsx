import { usePortfolio } from "@/store/PortfolioStore"
import { motion } from "framer-motion"

export const ProjectCard = ({ children }) => {

    const {currentProject, isChanging} = usePortfolio()

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
                 {children}
                </span>
            </div>
        </motion.div>
    )
}