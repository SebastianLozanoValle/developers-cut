import { FaPencilAlt, FaWhatsapp } from "react-icons/fa"
import { GiHoneycomb } from "react-icons/gi"
import { ContactForm } from "../forms/ContactForm"
import { useIsOpenForm } from "@/store/ContactFormStore"

export const LandingMobile = () => {

    const {isOpen, openCloseForm} = useIsOpenForm()

    return (
        <>
            {
                isOpen && <ContactForm />
            }
            <div
                className="relative z-[9] flex justify-center items-center min-h-[345px] bg-[#6C00E6]"
            >
                    <div className="flex flex-col items-center gap-4 w-3/4">
                        <h1 className="font-bold text-4xl text-white text-center text-[40px]">SLE te impulsa</h1>
                        <p className="text-[28px] text-white text-center">lleva tu empresa a nuevos horizontes con nosotros</p>
                    </div>
            </div>
            <div className="flex w-screen justify-center h-[150px] overflow-y-hidden pt-8">
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
                        <button onClick={() => openCloseForm(true)} className="text-white px-4 py-2 font-bold flex gap-2 items-center bg-blue-600 transition-all duration-500 active:bg-blue-800">
                        <FaPencilAlt className="text-2xl capitalize" />
                        Contactanos
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-[#2B3550] text-white py-20">
                <div className='flex flex-col gap-8 w-3/4'>
                    <h2 className="font-bold text-[30px] capitalize">No logras llegar a tus clientes? <br/> marketing es la respuesta</h2>
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
                        <a href="#" className="text-white px-4 py-2 font-bold flex gap-2 items-center bg-green-600 transition-all duration-500 active:bg-green-800">
                        <FaWhatsapp className="text-2xl" />
                        Contactanos
                        </a>
                        <a href="#" className="text-white px-4 py-2 font-bold flex gap-2 items-center bg-blue-600 transition-all duration-500 active:bg-blue-800">
                        <FaPencilAlt className="text-1xl" />
                        asesorate
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
            </div>
            <div className="flex justify-center bg-[#8E9BFF] text-white py-20">
                <div className='flex flex-col gap-8 w-3/4'>
                    <h2 className="font-bold text-[30px] capitalize">Soluciones dinamicas para las empresas del mañana</h2>
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
                        <a href="#" className="text-white px-4 py-2 font-bold flex gap-2 items-center bg-purple-600 transition-all duration-500 active:bg-purple-800">
                        <GiHoneycomb className="text-2xl capitalize" />
                        nuestras soluciones
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}