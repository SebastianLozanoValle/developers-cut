import Link from "next/link";
import { BlogNav } from "../nav/BlogNav";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";

export const BlogLanding = () => {
    return (
        <div className="flex relative min-h-screen">
            <div className="flex-1 flex flex-col bg-[#d5daff]">
                <div className="sticky top-0 left-0">
                    <BlogNav />
                    <div className="flex flex-col">
                        <div className="pl-10 pt-4 flex gap-8">
                            <ul className="flex gap-4">
                                <li>
                                    <button className="inline-flex items-center rounded-sm bg-purple-50 px-2 py-1 text-xs font-medium text-[#6C00E6] ring-1 ring-inset ring-purple-700/10">Webs</button>
                                </li>
                                <li>
                                    <button className="inline-flex items-center rounded-sm bg-purple-50 px-2 py-1 text-xs font-medium text-[#6C00E6] ring-1 ring-inset ring-purple-700/10">Webs</button>
                                </li>
                                <li>
                                    <button className="inline-flex items-center rounded-sm bg-purple-50 px-2 py-1 text-xs font-medium text-[#6C00E6] ring-1 ring-inset ring-purple-700/10">Webs</button>
                                </li>
                                <li>
                                    <button className="inline-flex items-center rounded-sm bg-purple-50 px-2 py-1 text-xs font-medium text-[#6C00E6] ring-1 ring-inset ring-purple-700/10">Webs</button>
                                </li>
                            </ul>
                        </div>
                        <div className="pl-10 pt-4 flex gap-8">
                            <ul className="flex gap-4">
                                <li>
                                    <button className="inline-flex items-center rounded-sm bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Webs</button>
                                </li>
                                <li>
                                    <button className="inline-flex items-center rounded-sm bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Webs</button>
                                </li>
                                <li>
                                    <button className="inline-flex items-center rounded-sm bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Webs</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center py-20">
                    <div className="flex items-center w-[90%] gap-20">
                        <div className="flex flex-col gap-10 flex-1">
                            <h3 className="font-bold border-l-[#6C00E6] border-l-2 bg-gradient-to-r from-[#6b00e659] to-[#d5daff] inline-block max-w-fit p-2">
                                Articulo De La Semana
                            </h3>
                            <div className="flex items-center gap-4">
                                <Link href={'/blog/#'} className="text-blue-700 text-sm font-light">
                                    Webs
                                </Link>
                                <span className="text-gray-400 text-xs font-extralight">
                                    Hace 4 horas
                                </span>
                            </div>
                            <h2 className="text-3xl lg:text-6xl font-extrabold capitalize">
                                Las empresas que tienen presencia en la web reportan mayores ingresos que las que no. 
                            </h2>
                            <ul className="flex gap-4">
                                <li>
                                    <span className="text-gray-400 text-xs font-extralight">
                                        Hace 4 horas
                                    </span>
                                </li>
                                <li>
                                    <span className="text-gray-400 text-xs font-extralight">
                                        Hace 4 horas
                                    </span>
                                </li>
                            </ul>
                            <Link
                                href={'/#'}
                                className="bg-white max-w-fit px-2 py-1 font-bold rounded-sm"
                            >
                                Leer Articulo
                            </Link>
                        </div>
                        <Image src="/vercel.svg" alt="logo" width={400} height={400} />
                    </div>
                </div>
                
                <div className="pl-10 flex flex-col py-20">
                    <h3 className="font-bold border-l-[#6C00E6] border-l-2 bg-gradient-to-r from-[#6b00e659] to-[#d5daff] inline-block max-w-fit p-2">
                        Articulos Destacados
                    </h3>
                    <div className="flex items-start gap-5">
                        <Link href={'/blog/#'} className="flex items-center justify-center w-1/5 m-4 p-4 rounded-sm hover:backdrop-blur-sm hover:bg-white/30 transition-all duration-500 ease-in-out">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-4">
                                    <Link href={'/blog/#'} className="text-blue-700 text-sm font-light">
                                        Webs
                                    </Link>
                                    <span className="text-gray-400 text-xs font-extralight">
                                        Hace 4 horas
                                    </span>
                                </div>
                                <h3 className="text-xl overflow-y-hidden font-bold">Reportes indican que Wordpress...</h3>
                            </div>
                        </Link>
                        <Link href={'/blog/#'} className="flex items-center justify-center w-1/5 m-4 p-4 rounded-sm hover:backdrop-blur-sm hover:bg-white/30 transition-all duration-500 ease-in-out">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-4">
                                    <Link href={'/blog/#'} className="text-blue-700 text-sm font-light">
                                        Webs
                                    </Link>
                                    <span className="text-gray-400 text-xs font-extralight">
                                        Hace 4 horas
                                    </span>
                                </div>
                                <h3 className="text-xl overflow-y-hidden font-bold">Reportes indican que Wordpress...</h3>
                            </div>
                        </Link>
                        <Link href={'/blog/#'} className="flex items-center justify-center w-1/5 m-4 p-4 rounded-sm hover:backdrop-blur-sm hover:bg-white/30 transition-all duration-500 ease-in-out">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-4">
                                    <Link href={'/blog/#'} className="text-blue-700 text-sm font-light">
                                        Webs
                                    </Link>
                                    <span className="text-gray-400 text-xs font-extralight">
                                        Hace 4 horas
                                    </span>
                                </div>
                                <h3 className="text-xl overflow-y-hidden font-bold">Reportes indican que Wordpress...</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <aside className="sticky top-0 p-4 bg-[#d5daff] h-screen w-1/4">
                <div className="flex flex-col bg-white h-full p-2 rounded-sm">
                    <div className="flex justify-between items-center bg-slate-200 p-2 rounded-sm">
                        <input type="text" className="bg-gray-200 max-w-[75%]" />
                        <IoSearch className="text-xl" />
                    </div>
                </div>
            </aside>
        </div>
    );
};
