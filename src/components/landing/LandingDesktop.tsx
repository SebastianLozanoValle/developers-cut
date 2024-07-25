'use client'
import { FaWhatsapp, FaPencilAlt } from "react-icons/fa";
import { GiHoneycomb } from "react-icons/gi";
import {
  motion
} from 'framer-motion'
import { useState } from "react";
import { FaReact, FaWordpressSimple, FaApple, FaPython, FaCss3Alt, FaHtml5, FaJava, FaShopify, FaWix, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiKotlin, SiWoo } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { ContactForm } from "../forms/ContactForm";
import { useIsOpenForm } from "@/store/ContactFormStore";
import { Portfolio } from "./Portfolio";

const services =[
        {
            title: "que usamos",
            text: "En SLE utilizamos tecnologias de vanguardia y herramientas consolidadas en el mercada. De a cuerdo a las nesesidades de tu proyecto generaremos un plan estructurado en lo que mas te convenga logrando un equilibrio entre eficiencia, calidad y velocidad de entrega."
        },
        {
            title: "Herramientas No-Code",
            text: "Sabemos que tu tiempo es importante por lo cual utilizamos tecnologias de proccion que aseguran cortos tiempos de entrega sin perder la calidad en proyectos pequeños/medianos, con optimizacion de alta calidad y posicionamiento SEO."
        },
        {
            title: "Tecnologias Web",
            text: "Para esos proyectos ambiciosos y marcas con identidar marcada, perzonalizacion y eficiencia con tecnologias de vanguardia utilizadas por los grandes de la industria."
        },
        {
            title: "Software & Apps",
            text: "Nesesitas Soluciones de software que funcionen en todos tus dispositivos y nosotros lo sabemos, por eso ponemos a tu alcance lo ultimo en desarrollo multiplataforma."
        },
        {
            title: "Desarrollo De aplicaciones nativas",
            text: "En SLE utilizamos tecnologias de vanguardia y herramientas consolidadas en el mercada. De a cuerdo a las nesesidades de tu proyecto generaremos un plan estructurado en lo que mas te convenga logrando un equilibrio entre eficiencia, calidad y velocidad de entrega."
        },
    ]


export const LandingDesktop = () => {

    const [scrolledBanner, setScrolledBanner] = useState(true);
    const [currentService, setCurrentService] = useState(0)

    const handlerScrolledBanner = (value: boolean) => {
        setScrolledBanner(value);
        // console.log(value)
    }

    const {isOpen, openCloseForm} = useIsOpenForm()

    const serviceChangeHandler = (servicePosition: number) => {
        console.log('pasando por el servicio ' + servicePosition)
        setCurrentService(servicePosition)
    }

    return(
        <>
            {
                isOpen && <ContactForm />
            }
            {/* <ContactForm /> */}
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
                <div className="z-[7] w-1/2 min-h-[calc(100vh-92px)] py-20 bg-[#F4F4F4] flex justify-center items-center lg:pl-[10vw]">
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
                            <button onClick={() => openCloseForm(true)} className="text-white px-4 py-2 font-bold flex gap-2 items-center blue-btn">
                            <FaPencilAlt className="text-2xl capitalize" />
                            Contactanos
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 bg-[#1B2132] min-h-[calc(100vh-92px)]">
                    
                </div>
                </motion.div>
                <div className='flex'>
                    <div className="z-[7] w-1/2 min-h-[calc(100vh-92px)] py-20 bg-[#F4F4F4] flex justify-center items-center lg:pl-[10vw]">
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
                            <div className="flex justify-center">
                                <button onClick={() => openCloseForm(true)} className="text-white px-4 py-2 font-bold flex gap-2 items-center blue-btn">
                                <FaPencilAlt className="text-1xl" />
                                asesorate
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 bg-[#2B3550] min-h-[calc(100vh-92px)]">
                        
                    </div>
                </div>
                <div className='flex'>
                    <div className="w-1/2 min-h-[calc(100vh-92px)] bg-[#8E9BFF]">
                        
                    </div>
                    <div className="z-[7] w-1/2 min-h-[calc(100vh-92px)] bg-[#F4F4F4] py-20 flex justify-center items-center lg:pr-[10vw]">
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
                    className="relative flex gap-8 items-start px-16 py-20 lg:px-0 lg:w-4/5 mx-auto bg-[#f4f4f4] z-[1]"
                >
                    <div
                        className="min-h-screen top-0 sticky flex items-center flex-[3]"
                    >
                        <motion.div
                            key={currentService}
                            initial={{ opacity: 0, translateX: -200 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            exit={{ opacity: 0, translateX: -200 }}
                            transition={{ duration: .5 }}
                            className="flex flex-col gap-8"
                        >
                            <motion.h2
                                key={currentService}
                                initial={{ opacity: 0, translateX: -200 }}
                                animate={{ opacity: 1, translateX: 0 }}
                                exit={{ opacity: 0, translateX: -200 }}
                                transition={{ duration: .5 }}
                                className="font-extrabold text-[45px] capitalize text-[#6C00E6]"
                            >
                                {services[currentService].title}
                            </motion.h2>
                            <p className="font-bold">
                                {services[currentService].text}
                            </p>
                        </motion.div>
                    </div>
                    <div
                        className="flex flex-col justify-center items-center flex-[4]"
                    >
                        <div
                            className="flex flex-col items-center h-screen justify-center w-3/4"
                        >
                            <motion.div
                                viewport={{
                                    margin: '-300px',
                                    }}
                                onViewportEnter={()=> serviceChangeHandler(0)}
                                className="grid grid-cols-3 items-center justify-around w-full gap-8"
                            >
                                <div className="flex flex-col items-center justify-around">
                                    <FaHtml5 className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>HTML5</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaCss3Alt className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>CSS</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaReact className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>React</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaJava className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Java</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaPython className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>python</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <SiNextdotjs className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Next.js</span>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="rounded-full p-3 text-2xl text-black border-4 border-black">
                                        <SiKotlin />
                                    </div>
                                    <span>Kotlin</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <IoLogoAndroid className="rounded-full p-2 text-6xl border-4 border-black" />
                                    <span>Android</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaApple className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Apple</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaWordpressSimple className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>WordPress</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaWix className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Wix</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaShopify className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Shopify</span>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="rounded-full p-3 text-3xl text-black border-4 border-black">
                                        <SiWoo />
                                    </div>
                                    <span>WooCommerce</span>
                                </div>
                            </motion.div>
                        </div>
                        <div
                            className="flex flex-col items-center h-screen justify-center w-3/4"
                        >
                            <motion.div
                                viewport={{
                                    margin: '-300px',
                                    }}
                                onViewportEnter={()=> serviceChangeHandler(1)}
                                className="grid grid-cols-3 items-center justify-around w-full gap-8"
                            >
                                <div className="flex flex-col items-center justify-around">
                                    <FaWordpressSimple className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>WordPress</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaWix className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Wix</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaShopify className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Shopify</span>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="rounded-full p-3 text-3xl text-black border-4 border-black">
                                        <SiWoo />
                                    </div>
                                    <span>WooCommerce</span>
                                </div>
                            </motion.div>
                        </div>
                        <div
                            className="flex flex-col items-center h-screen justify-center w-3/4"
                        >
                            <motion.div
                                viewport={{
                                    margin: '-300px',
                                    }}
                                onViewportEnter={()=> serviceChangeHandler(2)}
                                className="grid grid-cols-3 items-center justify-around w-full gap-8"
                            >
                                <div className="flex flex-col items-center justify-around">
                                    <FaHtml5 className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>HTML5</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaCss3Alt className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>CSS</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaReact className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>React</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaJava className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Java</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaPython className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>python</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <SiNextdotjs className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Next.js</span>
                                </div>
                            </motion.div>
                        </div>
                        <div
                            className="flex flex-col items-center h-screen justify-center w-3/4"
                        >
                            <motion.div
                                viewport={{
                                    margin: '-300px',
                                    }}
                                onViewportEnter={()=> serviceChangeHandler(3)}
                                className="grid grid-cols-3 items-center justify-around w-full gap-8"
                            >
                                <div className="flex flex-col items-center justify-around">
                                    <FaReact className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Native</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaJava className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Java</span>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="rounded-full p-3 text-2xl text-black border-4 border-black">
                                        <SiKotlin />
                                    </div>
                                    <span>Kotlin</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <IoLogoAndroid className="rounded-full p-2 text-6xl border-4 border-black" />
                                    <span>Android</span>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <FaApple className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                                    <span>Apple</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <Portfolio />
            </div>
        </>
    )
}