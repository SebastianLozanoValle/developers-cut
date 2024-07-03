import { usePortfolio } from "@/store/PortfolioStore"
import { PortfolioButton } from "../general/PortfolioButton"
import { ProjectCard } from "../general/ProjectCard"

export const Portfolio = () => {

    const {currentProject} = usePortfolio()

    return (
        <div className="overflow-x-hidden">
            <div className="z-[7] relative min-h-screen w-screen bg-[#f4f4f4] pt-20">
                <div className="z-[7] w-4/5 mx-auto relative flex flex-wrap items-center min-h-screen">
                    <div className="w-1/2 min-w-[690px] flex flex-col items-center mx-auto">
                        <h2 className="pl-10 text-[#6C00E6] font-extrabold text-6xl">
                            Nuestro Portafolio
                        </h2>
                        {/* <h2 className="absolute top-[10px] left-[10px] pl-10 bg-gradient-to-r from-[#8e9bff] to-[#f4f4f4] bg-clip-text text-transparent text-6xl font-extrabold">
                            Nuestro Portafolio
                        </h2> */}
                        <div className="relative h-[700px] w-[650px]">
                            <div className="flex absolute">
                                <PortfolioButton project={0}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={1}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute left-[100px] top-[60px]">
                                <PortfolioButton project={2}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={3}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute top-[120px]">
                                <PortfolioButton project={4}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={5}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={6}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute left-[100px] top-[180px]">
                                <PortfolioButton project={7}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={8}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={9}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute top-[240px]">
                                <PortfolioButton project={10}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={11}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={12}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute left-[100px] top-[300px]">
                                <PortfolioButton project={13}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={14}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute top-[360px]">
                                <PortfolioButton project={15}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={16}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute left-[100px] top-[420px]">
                                <PortfolioButton project={17}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={18}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute top-[480px]">
                                <PortfolioButton project={19}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={20}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={21}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute left-[100px] top-[540px]">
                                <PortfolioButton project={22}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={23}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={24}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center min-h-screen transition-all duration-500">
                        {
                            currentProject !== 100 ? (
                                <ProjectCard>
                                    
                                    <div className="">
                                        <h2>
                                            Projecto #{currentProject}
                                        </h2>
                                        <p>Este projecto consiste en bla bla bla</p>
                                    </div>
                                </ProjectCard>
                            ) : (
                                <p className="">
                                    Presiona Un Hexagono para ver la informacion de los proyectos aqui.
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}