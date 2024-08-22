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
            {/* {
                isOpen && <ContactForm />
            } */}
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
                <h1 className="font-bold text-4xl text-white text-center text-[40px]">SLE</h1>
                <p className="text-[28px] text-white text-center">Creando experiencias digitales excepcionales para impulsar tu éxito empresarial.
                </p>
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
                            <div className="hello">Apps
                            <span className="hidden">A Tu Medida</span>
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
                        <div className="hello">A tu
                        <span className="hidden">Alcance</span>
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
                        <ul className="list-disc list-inside flex flex-col gap-6 capitalize">
                            <li>
                            <span className="font-bold">Adaptadas a tus Necesidades:</span> Ofrecemos desarrollo a medida que se ajusta perfectamente a tus requisitos y objetivos específicos.
                            </li>
                            <li>
                            <span className="font-bold">Escalabilidad:</span> Nuestras soluciones están diseñadas para crecer junto a tu negocio, permitiendo una fácil expansión y adaptación.
                            </li>
                            <li>
                            <span className="font-bold">Ahorro de Tiempo y Recursos:</span> Nuestros servicios te permiten enfocarte en tu negocio principal mientras nos encargamos de las soluciones tecnológicas.
                            </li>
                            <li>
                            <span className="font-bold">Mejora de Procesos:</span> Implementamos sistemas que optimizan tus operaciones, mejorando la eficiencia y reduciendo costos.
                            </li>
                            <li>
                            <span className="font-bold">Asistencia Permanente:</span> Ofrecemos soporte técnico continuo para asegurarnos de que tus sistemas funcionen sin problemas en todo momento.
                            </li>
                            <li>
                            Mantenemos tus soluciones actualizadas con las últimas mejoras y parches de seguridad.
                            </li>
                        </ul>
                        <div className="flex justify-center">
                            <button onClick={() => openCloseForm(true)} className="text-white px-4 py-2 font-bold flex gap-2 items-center blue-btn">
                            <FaPencilAlt className="text-2xl capitalize" />
                            Contactanos
                            </button>
                            {/* <a href="mailto:info@sledevelopment.com" className="text-white px-4 py-2 font-bold flex gap-2 items-center bg-blue-600 transition-all duration-500 active:bg-blue-800">
                            <FaPencilAlt className="text-2xl capitalize" />
                            Contactanos
                            </a> */}
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
                            <ul className="list-disc list-inside flex flex-col gap-6 capitalize">
                                <li>
                                Desarrollamos sitios web optimizados para motores de búsqueda, mejorando tu ranking y asegurando que tu negocio sea más visible para clientes potenciales.
                                </li>
                                <li>
                                Implementamos estrategias de contenido que atraen tráfico orgánico de alta calidad y aumentan la relevancia de tu sitio.
                                </li>
                                <li>
                                Utilizamos herramientas de análisis para monitorear el comportamiento de los usuarios y ajustar estrategias para maximizar la retención.
                                </li>
                                <li>
                                Ofrecemos servicios integrales de marketing digital, incluyendo SEO, SEM, publicidad en redes sociales y email marketing, para aumentar tu alcance y atraer más clientes.
                                </li>
                                <li>
                                <span className="font-bold">Expansión de Alcance:</span> Implementamos estrategias que permiten expandir tu presencia en el mercado global, llegando a una audiencia más amplia.
                                </li>
                            </ul>
                            <div className="flex justify-center">
                                <button onClick={() => openCloseForm(true)} className="text-white px-4 py-2 font-bold flex gap-2 items-center blue-btn">
                                <FaPencilAlt className="text-1xl" />
                                Asesorate
                                </button>
                                {/* <a href="mailto:info@sledevelopment.com" className="text-white px-4 py-2 font-bold flex gap-2 items-center bg-blue-600 transition-all duration-500 active:bg-blue-800">
                                <FaPencilAlt className="text-2xl capitalize" />
                                Asesorate
                                </a> */}
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
                            <h2 className="font-bold text-black text-[30px] capitalize">Soluciones Con seguridad, Software de calidad</h2>
                            <ul className="list-disc list-inside flex flex-col gap-6 capitalize">
                                <li>
                                Garantizamos un desarrollo de primera con pruebas rigurosas para asegurar un rendimiento y experiencia de usuario excepcionales.
                                </li>
                                <li>
                                Utilizamos las mejores prácticas y tecnologías avanzadas para proteger tus sistemas y datos contra amenazas.
                                </li>
                                <li>
                                Aseguramos que nuestras soluciones cumplan con todas las regulaciones de seguridad y privacidad.
                                </li>
                            </ul>
                            <div className="flex justify-center">
                                <a href="#portfolio" className="text-white px-4 py-2 font-bold flex gap-2 items-center sle-btn">
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