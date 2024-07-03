import { usePortfolio } from "@/store/PortfolioStore"
import { PortfolioButton } from "../general/PortfolioButton"
import { ProjectCard } from "../general/ProjectCard"
import { HexagonBackground } from "../general/HexagonBackground"

export const Portfolio = () => {

    const {currentProject} = usePortfolio()

    return (
        <div className="overflow-x-hidden" id="portfolio">
            <div className="z-[7] relative min-h-screen w-screen bg-[#f4f4f4] pt-20">
                <div className="z-[7] w-4/5 mx-auto relative flex flex-wrap items-center min-h-screen">
                    <div className="z-[1] min-w-[690px] w-full flex flex-col mx-auto">
                        <h2 className="pl-10 text-[#6C00E6] font-extrabold text-6xl">
                            Nuestro Portafolio
                        </h2>
                        {/* <h2 className="absolute top-[10px] left-[10px] pl-10 bg-gradient-to-r from-[#8e9bff] to-[#f4f4f4] bg-clip-text text-transparent text-6xl font-extrabold">
                            Nuestro Portafolio
                        </h2> */}
                        <div className="z-[-1] relative h-[700px] w-[650px]">
                            <div className="w-2/3 flex absolute left-[-200px] top-[-255px]">
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                            </div>
                            <div className="w-2/3 flex absolute left-[-100px] top-[-195px]">
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                            </div>
                            <div className="w-2/3 flex absolute left-[-200px] top-[-135px]">
                                <HexagonBackground />
                            </div>
                            <div className="w-2/3 flex absolute left-[-300px] top-[-75px]">
                                <HexagonBackground />
                                <HexagonBackground />
                            </div>
                            <div className="w-2/3 flex absolute left-[-200px] top-[-15px]">
                                <HexagonBackground />
                                <PortfolioButton project={0}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={1}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute left-[-300px] top-[45px]">
                                <HexagonBackground />
                                <HexagonBackground />
                                <PortfolioButton project={2}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={3}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute left-[-200px] top-[105px]">
                                <HexagonBackground />
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
                            <div className="w-2/3 flex absolute left-[-300px] top-[165px]">
                                <HexagonBackground />
                                <HexagonBackground />
                                <PortfolioButton project={7}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={8}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton className={`${currentProject == 100 && 'animate-bote'}`} project={9}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute left-[-200px] top-[225px]">
                                <HexagonBackground />
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
                            <div className="w-2/3 flex absolute left-[-300px] top-[285px]">
                                <HexagonBackground />
                                <HexagonBackground />
                                <PortfolioButton project={13}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={14}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute left-[-200px] top-[345px]">
                                <HexagonBackground />
                                <PortfolioButton project={15}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={16}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute left-[-300px] top-[405px]">
                                <HexagonBackground />
                                <HexagonBackground />
                                <PortfolioButton project={17}>
                                    Proyecto
                                </PortfolioButton>
                                <PortfolioButton project={18}>
                                    Proyecto
                                </PortfolioButton>
                            </div>
                            <div className="w-2/3 flex absolute left-[-200px] top-[465px]">
                                <HexagonBackground />
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
                            <div className="w-2/3 flex absolute left-[-300px] top-[525px]">
                                <HexagonBackground />
                                <HexagonBackground />
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
                            <div className="w-2/3 flex absolute left-[-200px] top-[585px]">
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                            </div>
                            {/* <div className="flex absolute top-[-15px]">
                            </div>
                            <div className="w-2/3 flex absolute left-[100px] top-[45px]">
                            </div>
                            <div className="w-2/3 flex absolute top-[105px]">
                            </div>
                            <div className="w-2/3 flex absolute left-[100px] top-[165px]">
                            </div>
                            <div className="w-2/3 flex absolute top-[225px]">
                            </div>
                            <div className="w-2/3 flex absolute left-[100px] top-[285px]">
                            </div>
                            <div className="w-2/3 flex absolute top-[345px]">
                            </div>
                            <div className="w-2/3 flex absolute left-[100px] top-[405px]">
                            </div>
                            <div className="w-2/3 flex absolute top-[465px]">
                            </div>
                            <div className="w-2/3 flex absolute left-[100px] top-[525px]">
                            </div> */}
                        </div>
                    </div>
                    <div className="z-[2] absolute top-1/2 left-1/2 lg:left-3/4 transform -translate-x-1/2 -translate-y-1/2">
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