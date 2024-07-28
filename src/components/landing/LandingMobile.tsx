import { FaPencilAlt, FaWhatsapp } from "react-icons/fa"
import { GiHoneycomb } from "react-icons/gi"
import { ContactForm } from "../forms/ContactForm"
import { useIsOpenForm } from "@/store/ContactFormStore"
import { SiNextdotjs, SiWoo } from "react-icons/si"
import { PortfolioMobile } from "./PortfolioMobile"
import { FaApple, FaCss3Alt, FaHtml5, FaJava, FaReact, FaShopify, FaWix, FaWordpressSimple } from "react-icons/fa6"
import { IoLogoAndroid } from "react-icons/io"

export const LandingMobile = () => {

    const {isOpen, openCloseForm} = useIsOpenForm()

    return (
        <>
            {
                isOpen && <ContactForm />
            }
            <div className="overflow-x-hidden">
                <div
                    className="relative z-[9] flex justify-center items-center min-h-[345px] bg-[#6C00E6]"
                >
                        <div className="flex flex-col items-center gap-4 w-3/4">
                            <h1 className="font-bold text-4xl text-white text-center text-[40px]">SLE</h1>
                            <p className="text-[28px] text-white text-center">Creando experiencias digitales excepcionales para impulsar tu éxito empresarial.</p>
                        </div>
                </div>
                <div className="flex w-screen justify-center h-[150px] overflow-y-hidden pt-8">
                    <div className="card">
                        <div className="btn1"></div>
                        <div className="btn2"></div>
                        <div className="btn3"></div>
                        <div className="btn4"></div>
                        <div className="card-int">
                            <div className="hello">Aplicaciones
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
                </div>
                <div className="flex justify-center bg-[#1B2132] text-white py-20">
                    <div className='flex flex-col gap-8 w-3/4'>
                        <h2 className="font-bold text-[30px] capitalize">Tu presencia en la web hace la diferencia</h2>
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
                            {/* <button onClick={() => openCloseForm(true)} className="text-white px-4 py-2 font-bold flex gap-2 items-center bg-blue-600 transition-all duration-500 active:bg-blue-800">
                            <FaPencilAlt className="text-2xl capitalize" />
                            Contactanos
                            </button> */}
                            <a href="mailto:info@sledevelopment.com" className="text-white px-4 py-2 font-bold flex gap-2 items-center bg-blue-600 transition-all duration-500 active:bg-blue-800">
                            <FaPencilAlt className="text-2xl capitalize" />
                            Contactanos
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-[#2B3550] text-white py-20">
                    <div className='flex flex-col gap-8 w-3/4'>
                        <h2 className="font-bold text-[30px] capitalize">No logras llegar a tus clientes? <br/> marketing es la respuesta</h2>
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
                        <div className="flex justify-center gap-8 capitalize">
                            <a href="#" className="text-white px-4 py-2 font-bold flex gap-2 items-center bg-green-600 transition-all duration-500 active:bg-green-800">
                            <FaWhatsapp className="text-2xl" />
                            Contactanos
                            </a>
                            {/* <a href="#" className="text-white px-4 py-2 font-bold flex gap-2 items-center bg-blue-600 transition-all duration-500 active:bg-blue-800">
                            <FaPencilAlt className="text-1xl" />
                            asesorate
                            </a> */}
                            <a href="mailto:info@sledevelopment.com" className="text-white px-4 py-2 font-bold flex gap-2 items-center bg-blue-600 transition-all duration-500 active:bg-blue-800">
                            <FaPencilAlt className="text-2xl capitalize" />
                            Asesorate
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex w-screen justify-center h-[150px] overflow-y-hidden pt-8">
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
                </div>
                <div className="flex justify-center bg-[#8E9BFF] text-white py-20">
                    <div className='flex flex-col gap-8 w-3/4'>
                        <h2 className="font-bold text-[30px] capitalize">Soluciones Con seguridad, Software de calidad</h2>
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
                            <a href="#portfolio" className="text-white px-4 py-2 font-bold flex gap-2 items-center bg-purple-600 transition-all duration-500 active:bg-purple-800">
                            <GiHoneycomb className="text-2xl capitalize" />
                            nuestras soluciones
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="relative flex gap-8 items-start w-4/5 mx-auto bg-[#f4f4f4] z-[9]"
            >
                <div
                    className="min-h-screen top-0 sticky flex items-center flex-[3]"
                >
                    <div
                        className="flex flex-col gap-8"
                    >
                        <h2
                            className="font-extrabold text-[45px] capitalize text-[#6C00E6]"
                        >
                            Usamos
                        </h2>
                        <p className="font-bold">
                            Tecnologias de desarrollo rapido y eficiente asegurando la mejor calidad para nuestros clientes y sus usuarios
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-center items-center flex-[4]"
                >
                    <div
                        className="flex flex-col items-center h-[33vh] justify-center w-3/4"
                    >
                        <div className="flex flex-col items-center justify-around">
                            <FaHtml5 className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                            <span>HTML</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center h-[33vh] justify-center w-3/4"
                    >
                        <div className="flex flex-col items-center justify-around">
                            <FaCss3Alt className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                            <span>CSS</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center h-[33vh] justify-center w-3/4"
                    >
                        <div className="flex flex-col items-center justify-around">
                            <FaReact className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                            <span>React</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center h-[33vh] justify-center w-3/4"
                    >
                        <div className="flex flex-col items-center justify-around">
                            <FaJava className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                            <span>Java</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center h-[33vh] justify-center w-3/4"
                    >
                        <div className="flex flex-col items-center justify-around">
                            <SiNextdotjs className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                            <span>Next.js</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center h-[33vh] justify-center w-3/4"
                    >
                        <div className="flex flex-col items-center justify-around">
                            <IoLogoAndroid className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                            <span>Andorid</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center h-[33vh] justify-center w-3/4"
                    >
                        <div className="flex flex-col items-center justify-around">
                            <FaApple className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                            <span>Apple</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center h-[33vh] justify-center w-3/4"
                    >
                        <div className="flex flex-col items-center justify-around">
                            <FaWordpressSimple className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                            <span>Wordpress</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center h-[33vh] justify-center w-3/4"
                    >
                        <div className="flex flex-col items-center justify-around">
                            <FaShopify className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                            <span>Shopify</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center h-[33vh] justify-center w-3/4"
                    >
                        <div className="flex flex-col items-center justify-around">
                            <SiWoo className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                            <span className="text-center">Woo Commerce</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center h-[33vh] justify-center w-3/4"
                    >
                        <div className="flex flex-col items-center justify-around">
                            <FaWix className="rounded-full p-2 text-6xl text-black border-4 border-black" />
                            <span>Wix</span>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioMobile />
        </>
    )
}