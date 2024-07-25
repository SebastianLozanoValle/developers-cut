import { usePortfolio } from "@/store/PortfolioStore"
import { PortfolioButton } from "../general/PortfolioButton"
import { ProjectCard } from "../general/ProjectCard"
import { HexagonBackground } from "../general/HexagonBackground"
import Image from "next/image"
import { FaGear } from "react-icons/fa6";
import { portfolioData } from '../../data/portfolioData'

export const Portfolio = () => {

    const {currentProject} = usePortfolio()

    return (
        <div className="overflow-hidden" id="portfolio">
            <div className="relative min-h-screen w-screen bg-[#f4f4f4] pt-32">
                <div className="w-4/5 mx-auto relative flex flex-wrap items-center min-h-screen">
                    <div className="z-[1] min-w-[690px] w-full flex flex-col mx-auto">
                        <h2 className="pl-20 text-[#6C00E6] font-extrabold text-6xl pb-10">
                            Nuestro Portafolio
                        </h2>
                        {/* <h2 className="absolute top-[10px] left-[10px] pl-10 bg-gradient-to-r from-[#8e9bff] to-[#f4f4f4] bg-clip-text text-transparent text-6xl font-extrabold">
                            Nuestro Portafolio
                        </h2> */}
                        <div className="z-[-1] relative h-[700px] w-[650px] no-mobile-portfolio">
                            {/* <div className="w-2/3 flex absolute left-[-200px] top-[-255px]">
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                            </div> */}
                            {/* <div className="w-2/3 flex absolute left-[-300px] top-[-195px]">
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                            </div> */}
                            <div className="pointer-events-none decorative-hexagons">
                                <div className="w-2/3 flex absolute left-[-200px] top-[-135px]">
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[-300px] top-[-75px]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[-200px] top-[-15px]">
                                    <HexagonBackground />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton project={777} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-300px] top-[45px]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton project={777} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-200px] top-[105px]">
                                    <HexagonBackground />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton project={777} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-300px] top-[165px]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton className={`${currentProject == 100 && 'animate-bote'}`} project={777} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-200px] top-[225px]">
                                    <HexagonBackground />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton project={777} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-300px] top-[285px]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton project={777} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-200px] top-[345px]">
                                    <HexagonBackground />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton project={777} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-300px] top-[405px]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton project={777} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-200px] top-[465px]">
                                    <HexagonBackground />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton project={777} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-300px] top-[525px]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton project={777} />
                                    <PortfolioButton project={777} />
                                </div>
                            </div>
                            <div>
                                <div className="w-2/3 flex absolute left-[-200px] top-[-135px]">
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[-300px] top-[-75px]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[-200px] top-[-15px]">
                                    <HexagonBackground />
                                    <PortfolioButton project={0} />
                                    <PortfolioButton project={1} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-300px] top-[45px]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={2} />
                                    <PortfolioButton project={3} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-200px] top-[105px]">
                                    <HexagonBackground />
                                    <PortfolioButton project={4} />
                                    <PortfolioButton project={5} />
                                    <PortfolioButton project={6} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-300px] top-[165px]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={7} />
                                    <PortfolioButton project={8} />
                                    <PortfolioButton className={`${currentProject == 100 && 'animate-bote'}`} project={9} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-200px] top-[225px]">
                                    <HexagonBackground />
                                    <PortfolioButton project={10} />
                                    <PortfolioButton project={11} />
                                    <PortfolioButton project={12} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-300px] top-[285px]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={13} />
                                    <PortfolioButton project={14} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-200px] top-[345px]">
                                    <HexagonBackground />
                                    <PortfolioButton project={15} />
                                    <PortfolioButton project={16} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-300px] top-[405px]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={17} />
                                    <PortfolioButton project={18} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-200px] top-[465px]">
                                    <HexagonBackground />
                                    <PortfolioButton project={19} />
                                    <PortfolioButton project={20} />
                                    <PortfolioButton project={21} />
                                </div>
                                <div className="w-2/3 flex absolute left-[-300px] top-[525px]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={22} />
                                    <PortfolioButton project={23} />
                                    <PortfolioButton project={24} />
                                </div>
                            </div>
                            {/* <div className="w-2/3 flex absolute left-[-200px] top-[585px]">
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                                <HexagonBackground />
                            </div> */}
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
                    <div className="z-[2] absolute top-1/2 left-1/2 xl:left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                        {
                            currentProject !== 100 ? (
                                <ProjectCard>
                                    <div className="h-full">
                                        <div className="flex py-4">
                                            <div className="relative w-[242px] h-[150px] overflow-hidden rounded">
                                                <Image 
                                                    src="/imaginatrips.png"
                                                    alt="Background Image"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    quality={100}
                                                    className="absolute top-0 left-0 w-full h-full"
                                                />
                                                <span className="relative">
                                                    <span className="ml-1 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Finalizado</span>
                                                    <span className="absolute top-[2px] right-[2px]">
                                                    <span className="relative flex h-3 w-3">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                                                    </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex-1 px-4 text-slate-500 flex flex-col justify-around">
                                                <div className="flex gap-2 items-center">
                                                    <div className="p-1 border rounded-full border-slate-500">
                                                        <FaGear />
                                                    </div>
                                                    <h3 className="font-extrabold">Landing Page</h3>
                                                </div>
                                                <div className='button w-full h-8 mx-auto bg-[#6c00e6] rounded-lg cursor-pointer select-none
                                                    hover:translate-y-2 hover:[box-shadow:0_0px_0_0_#4a00b3,0_0px_0_0_#4a00b341]
                                                    hover:border-b-[0px]
                                                    transition-all duration-150 [box-shadow:0_10px_0_0_#4a00b3,0_15px_0_0_#4a00b341]
                                                    border-b-[1px] border-[#4a00b3]'>
                                                    <span className='flex flex-col justify-center items-center h-full text-white font-bold text-lg'>Visitar Web</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-1">
                                            <h4 className="font-extrabold">{portfolioData[currentProject].name}{currentProject}</h4>
                                            <p className="font-light text-sm text-slate-500">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente
                                            </p>
                                        </div>
                                    </div>
                                </ProjectCard>
                            ) : (
                                <p className="text-center">
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