'use client'
import { FaWhatsapp, FaPencilAlt } from "react-icons/fa";
import { GiHoneycomb } from "react-icons/gi";
import {
  motion
} from 'framer-motion'
import { useState } from "react";
import { FaReact, FaWordpressSimple, FaApple, FaPython, FaCss3Alt, FaHtml5, FaJava, FaShopify, FaWix, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiKotlin, SiWoo } from "react-icons/si";
import { FcAndroidOs } from "react-icons/fc";

export const LandingDesktop = () => {

    const [scrolledBanner, setScrolledBanner] = useState(true);
    const [scrolledIntro, setScrolledIntro] = useState(true);

    const handlerScrolledBanner = (value: boolean) => {
        setScrolledBanner(value);
        // console.log(value)
    }

    const handleScrolledIntro = (value: boolean) => {
        setScrolledIntro(value);
        console.log('se scrolleo el intro')
    }

    return(
        <>
            <motion.div
                className="relative z-[9] flex justify-center items-center min-h-[345px] bg-[#6C00E6]"
                viewport={{
                margin: '-300px',
                }}
                onViewportLeave={()=> handlerScrolledBanner(true)}
                onViewportEnter={()=> handlerScrolledBanner(false)}
            >
                <div className="flex flex-col items-center gap-4 w-3/4">
                <h1 className="font-bold text-4xl text-white text-center text-[40px]">SLE te impulsa</h1>
                <p className="text-[28px] text-white text-center">lleva tu empresa a nuevos horizontes con nosotros</p>
                </div>
            </motion.div>
            {/* inicio de seccion desktop */}
            <div className="relative">
                {/* <span className="animado">
                imagen
                </span> */}
                <motion.div
                    initial={{
                        opacity: 1,
                        position: 'fixed',
                        top: '50%',
                        z: '6',
                        transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                        top: scrolledBanner ? '50%' : '80%',
                    }}
                    className="left-[75%] lg:left-[70%]"
                >
                    <div className="card">

                        <div className="btn1"></div>
                        <div className="btn2"></div>
                        <div className="btn3"></div>
                        <div className="btn4"></div>
                        <div className="card-int">
                            <div className="hello">telefono
                            <span className="hidden">SLE</span>
                            </div>
                        </div>
                        <div className="top">
                            <div className="camera">
                            <div className="int"></div>
                            </div>
                            <div className="speaker"></div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                initial={{
                    opacity: 1,
                    position: 'fixed',
                    top: '50%',
                    z: '6',
                    transform: 'translate(-50%, -50%)',
                }}
                className="left-[25%] lg:left-[30%]"
                >
                <div className="card">

                    <div className="btn1"></div>
                    <div className="btn2"></div>
                    <div className="btn3"></div>
                    <div className="btn4"></div>
                    <div className="card-int">
                        <div className="hello">computador
                        <span className="hidden">SLE</span>
                        </div>
                    </div>
                    <div className="top">
                        <div className="camera">
                        <div className="int"></div>
                        </div>
                        <div className="speaker"></div>
                    </div>
                </div>
                </motion.div>
                <motion.div
                className='flex'
                >
                <div className="z-[7] w-1/2 min-h-[calc(100vh-92px)] bg-[#F4F4F4] flex justify-center items-center lg:pl-[10vw]">
                    <div className='flex flex-col gap-8 w-3/4'>
                        <h2 className="font-bold text-black text-[30px] capitalize">Tu presencia en la web hace la diferencia</h2>
                        <ul className="list-disc list-inside font-bold flex flex-col gap-6 capitalize">
                            <li>
                            54% mas engagement.
                            </li>
                            <li>
                            90% tasa de retencion del publico objetivo.
                            </li>
                            <li>
                            80% tasa de conversion en ventas.
                            </li>
                            <li>
                            tu propio sitio en la red en poco tiempo a largo plazo.
                            </li>
                            <li>
                            tu marca es importante y nosotros lo sabemos, personalizacion a la medida.
                            </li>
                        </ul>
                        <div className="flex justify-center">
                            <a href="#" className="text-white px-4 py-2 font-bold flex gap-2 items-center wp-btn">
                            <FaWhatsapp className="text-2xl capitalize" />
                            Contactanos
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 bg-[#1B2132] min-h-[calc(100vh-92px)]">
                    
                </div>
                </motion.div>
                <div className='flex'>
                    <div className="z-[7] w-1/2 min-h-[calc(100vh-92px)] bg-[#F4F4F4] flex justify-center items-center lg:pl-[10vw]">
                        <div className='flex flex-col gap-8 w-3/4'>
                            <h2 className="font-bold text-black text-[30px] capitalize">No logras llegar a tus clientes? <br/> marketing es la respuesta</h2>
                            <ul className="list-disc list-inside font-bold flex flex-col gap-6 capitalize">
                                <li>
                                Conoce nuestras estrategias de marketing digital y sumergete en el mundo de los ads.
                                </li>
                                <li>
                                90% tasa de retencion del publico objetivo.
                                </li>
                                <li>
                                80% tasa de conversion en ventas.
                                </li>
                            </ul>
                            <div className="flex justify-center gap-8 capitalize">
                                <a href="#" className="text-white px-4 py-2 font-bold flex gap-2 items-center wp-btn">
                                <FaWhatsapp className="text-2xl" />
                                Contactanos
                                </a>
                                <a href="#" className="text-white px-4 py-2 font-bold flex gap-2 items-center blue-btn">
                                <FaPencilAlt className="text-1xl" />
                                asesorate
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 bg-[#2B3550] min-h-[calc(100vh-92px)] rounded-bl-[100px]">
                        
                    </div>
                </div>
                <div className='flex'>
                    <div className="w-1/2 min-h-[calc(100vh-92px)] bg-[#8E9BFF] rounded-r-[100px]">
                        
                    </div>
                    <div className="z-[7] w-1/2 min-h-[calc(100vh-92px)] bg-[#F4F4F4] flex justify-center items-center lg:pr-[10vw]">
                        <motion.div className='flex flex-col gap-8 w-3/4'>
                            <h2 className="font-bold text-black text-[30px] capitalize">Soluciones dinamicas para las empresas del mañana</h2>
                            <ul className="list-disc list-inside font-bold flex flex-col gap-6 capitalize">
                                <li>
                                Desarrollo Web WordPres o nativo.
                                </li>
                                <li>
                                Desarrollo de Aplicaciones Moviles.
                                </li>
                                <li>
                                Soluciones de software empresarial.
                                </li>
                                <li>
                                Diseño UX/UI.
                                </li>
                                <li>
                                Ponemos nuestro conocimiento y expertis a tu disposicion.
                                </li>
                            </ul>
                            <div className="flex justify-center">
                                <a href="#" className="text-white px-4 py-2 font-bold flex gap-2 items-center sle-btn">
                                <GiHoneycomb className="text-2xl capitalize" />
                                nuestras soluciones
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div
                    className="relative flex gap-8 items-start w-4/5 mx-auto bg-[#f4f4f4] z-[9]"
                >
                    <div
                        className="min-h-screen top-0 sticky flex items-center flex-[3]"
                    >
                        <div>
                            <h2 className="font-bold text-black text-[30px] capitalize">Que Usamos?</h2>
                            <p className="font-bold">
                                En SLE utilizamos tecnologias de vanguardia y herramientas consolidadas en el mercada.
                                De a cuerdo a las nesesidades de tu proyecto generaremos un plan estructurado en lo que mas te convenga logrando un equilibrio entre eficiencia, calidad y velocidad de entrega.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-center items-center flex-[4]"
                    >
                        <div className="flex flex-col items-center h-screen justify-center w-3/4">
                            <div className="grid grid-cols-3 items-center justify-around w-full gap-8">
                                <div className="flex flex-col items-center justify-around">
                                    <FaHtml5 className="rounded-full p-2 text-6xl text-orange-500 border-4 border-orange-500" />
                                    <span>HTML5</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaCss3Alt className="rounded-full p-2 text-6xl text-blue-400 border-4 border-blue-400" />
                                    <span>CSS</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaReact className="rounded-full p-2 text-6xl text-blue-500 border-4 border-blue-500" />
                                    <span>React</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaJava className="rounded-full p-2 text-6xl text-blue-400 border-4 border-red-500" />
                                    <span>Java</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaPython className="rounded-full p-2 text-6xl text-yellow-500 border-4 border-blue-500" />
                                    <span>python</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <SiNextdotjs className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Next.js</span>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="rounded-full p-3 text-2xl text-[#6C00E6] border-4 border-[#6C00E6]">
                                        <SiKotlin />
                                    </div>
                                    <span>Kotlin</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FcAndroidOs className="rounded-full p-2 text-6xl border-4 border-[#7CB342]" />
                                    <span>Android</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaApple className="rounded-full p-2 text-6xl text-[#B7B7B7] border-4 border-[#B7B7B7]" />
                                    <span>Apple</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaWordpressSimple className="rounded-full p-2 text-6xl text-[#1B769C] border-4 border-[#1B769C]" />
                                    <span>WordPress</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaWix className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Apple</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaShopify className="rounded-full p-2 text-6xl text-[#8DB543] border-4 border-[#8DB543]" />
                                    <span>Shopify</span>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="rounded-full p-3 text-3xl text-[#8053B4] border-4 border-[#8053B4]">
                                        <SiWoo />
                                    </div>
                                    <span>WooCommerce</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center h-screen justify-center w-3/4">
                            <div className="grid grid-cols-3 items-center justify-around w-full gap-8">
                                <div className="flex flex-col items-center justify-around">
                                    <FaHtml5 className="rounded-full p-2 text-6xl text-orange-500 border-4 border-orange-500" />
                                    <span>HTML5</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaCss3Alt className="rounded-full p-2 text-6xl text-blue-400 border-4 border-blue-400" />
                                    <span>CSS</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaReact className="rounded-full p-2 text-6xl text-blue-500 border-4 border-blue-500" />
                                    <span>React</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaJava className="rounded-full p-2 text-6xl text-blue-400 border-4 border-red-500" />
                                    <span>Java</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaPython className="rounded-full p-2 text-6xl text-yellow-500 border-4 border-blue-500" />
                                    <span>python</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <SiNextdotjs className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Next.js</span>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="rounded-full p-3 text-2xl text-[#6C00E6] border-4 border-[#6C00E6]">
                                        <SiKotlin />
                                    </div>
                                    <span>Kotlin</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FcAndroidOs className="rounded-full p-2 text-6xl border-4 border-[#7CB342]" />
                                    <span>Android</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaApple className="rounded-full p-2 text-6xl text-[#B7B7B7] border-4 border-[#B7B7B7]" />
                                    <span>Apple</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center h-screen justify-center">
                            <SiNextdotjs className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                            <span>Codigo</span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <FaCode className="rounded-full p-2 text-6xl text-[#6C00E6] border-4 border-[#6C00E6]" />
                            <span>Codigo</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// import { , , , , , , , , ,  } from "react-icons/fa";
// import { ,  } from "react-icons/si";
// import {  } from "react-icons/fc";
// import { SiWoocommerce } from "react-icons/si";