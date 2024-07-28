import { usePortfolio } from "@/store/PortfolioStore";
import { PortfolioButton } from "../general/PortfolioButton";
import { ProjectCard } from "../general/ProjectCard";
import { HexagonBackground } from "../general/HexagonBackground";
import Image from "next/image";
import { FaGear } from "react-icons/fa6";
import { portfolioData } from '../../data/portfolioData';

export const PortfolioMobile = () => {
    const { currentProject } = usePortfolio();

    return (
        <div id="portfolio">
            <div className="relative min-h-screen bg-[#f4f4f4] pt-32">
                <div className="relative flex flex-col justify-center items-center min-h-screen">
                    <div className="z-[1] relative w-full flex flex-col mx-auto">
                        <h2 className="text-center text-[#6C00E6] font-extrabold text-6xl pb-20">
                            Nuestro Portafolio
                        </h2>
                        <div className="z-[3] sticky top-1/2 h-8 flex justify-center">
                            {
                                currentProject !== 100 ? (
                                    <div className="scale-75">
                                        <ProjectCard>
                                            <div className="h-full">
                                                <div className="flex py-4">
                                                    <div className="relative w-[242px] h-[150px] overflow-hidden rounded">
                                                        <Image 
                                                            src={portfolioData[currentProject].imagesrc}
                                                            alt="Background Image"
                                                            layout="fill"
                                                            objectFit="cover"
                                                            quality={100}
                                                            className="absolute top-0 left-0 w-full h-full"
                                                        />
                                                        <span className="relative">
                                                            <span className="ml-1 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{portfolioData[currentProject].state}</span>
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
                                                            <h3 className="font-extrabold">{portfolioData[currentProject].category}</h3>
                                                        </div>
                                                        <div className='button w-full h-8 mx-auto bg-[#6c00e6] rounded-lg cursor-pointer select-none
                                                            hover:translate-y-2 hover:[box-shadow:0_0px_0_0_#4a00b3,0_0px_0_0_#4a00b341]
                                                            hover:border-b-[0px]
                                                            transition-all duration-150 [box-shadow:0_10px_0_0_#4a00b3,0_15px_0_0_#4a00b341]
                                                            border-b-[1px] border-[#4a00b3]'>
                                                            <a  href={portfolioData[currentProject].url} target="_blank" className='flex flex-col justify-center items-center h-full text-white font-bold text-lg'>Visitar Web</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-1">
                                                    <h4 className="font-extrabold">{portfolioData[currentProject].name}</h4>
                                                    <p className="font-light text-sm text-slate-500">
                                                    {portfolioData[currentProject].description}
                                                    </p>
                                                </div>
                                            </div>
                                        </ProjectCard>
                                    </div>
                                ) : (
                                    <p className="text-center">
                                        Presiona Un Hexagono para ver la informacion de los proyectos aqui.
                                    </p>
                                )
                            }
                        </div>
                        <div className="z-[-1] relative h-[1200px] flex justify-center overflow-x-hidden">
                            <div className="relative">
                                <div className="w-2/3 flex absolute left-[calc(-500px)] top-[calc(60px*0)]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={0} />
                                    <HexagonBackground />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px+100px)] top-[calc(60px*1)]">
                                    <HexagonBackground />
                                    <PortfolioButton project={1} />
                                    <PortfolioButton project={2} />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px)] top-[calc(60px*2)]">
                                    <HexagonBackground />
                                    <HexagonBackground />                                    <PortfolioButton project={3} />
                                    <HexagonBackground />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px+100px)] top-[calc(60px*3)]">
                                    <HexagonBackground />
                                    <PortfolioButton project={4} />
                                    <PortfolioButton project={5} />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px)] top-[calc(60px*4)]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={6} />
                                    <HexagonBackground />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px+100px)] top-[calc(60px*5)]">
                                    <HexagonBackground />
                                    <PortfolioButton project={7} />
                                    <PortfolioButton project={8} />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px)] top-[calc(60px*6)]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={9} />
                                    <HexagonBackground />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px+100px)] top-[calc(60px*7)]">
                                    <HexagonBackground />
                                    <PortfolioButton project={10} />
                                    <PortfolioButton project={11} />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px)] top-[calc(60px*8)]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={12} />
                                    <HexagonBackground />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px+100px)] top-[calc(60px*9)]">
                                    <HexagonBackground />
                                    <PortfolioButton project={13} />
                                    <PortfolioButton project={14} />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px)] top-[calc(60px*10)]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={15} />
                                    <HexagonBackground />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px+100px)] top-[calc(60px*11)]">
                                    <HexagonBackground />
                                    <PortfolioButton project={16} />
                                    <PortfolioButton project={17} />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px)] top-[calc(60px*12)]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={18} />
                                    <HexagonBackground />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px+100px)] top-[calc(60px*13)]">
                                    <HexagonBackground />
                                    <PortfolioButton project={19} />
                                    <PortfolioButton project={20} />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px)] top-[calc(60px*14)]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={21} />
                                    <HexagonBackground />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px+100px)] top-[calc(60px*15)]">
                                    <HexagonBackground />
                                    <PortfolioButton project={22} />
                                    <PortfolioButton project={23} />
                                    <HexagonBackground />
                                </div>
                                <div className="w-2/3 flex absolute left-[calc(-500px)] top-[calc(60px*16)]">
                                    <HexagonBackground />
                                    <HexagonBackground />
                                    <PortfolioButton project={24} />
                                    <HexagonBackground />
                                    <HexagonBackground />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}