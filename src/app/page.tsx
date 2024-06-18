'use client'
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { NavigationLink } from '@/components//nav/NavigationLink'
import { Divice } from "@/components/landing/Divice";
import { FaWhatsapp, FaPencilAlt } from "react-icons/fa";
import { GiHoneycomb } from "react-icons/gi";
import {
  motion
} from 'framer-motion'
import { useEffect, useState } from "react";
import { Spinner } from "@/components/general/Spinner";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {

  const [scrolledBanner, setScrolledBanner] = useState(true);
  const [allReady, setAllReady] = useState(false);

  useEffect(() => {
    setAllReady(true)
  }, [])

  const handlerScrolledBanner = (value: boolean) => {
    setScrolledBanner(value);
    console.log(value)
  }

  return (
    <main className={`${font.className} bg-[#F4F4F4]`}>
      <span className={`${allReady ? 'already-loaded' : 'page-loader'}`}>
      </span>
      
      <motion.div
        className="relative z-[9] flex justify-center items-center min-h-[345px] bg-[#6C00E6]"
        viewport={{
          margin: '-300px',
        }}
        onViewportLeave={()=> handlerScrolledBanner(true)}
        onViewportEnter={()=> handlerScrolledBanner(false)}
      >
        <div className="flex flex-col items-center gap-4 w-3/4">
          <h1 className="font-bold text-4xl text-white text-center text-[40px]">Un Slogan Creativo que defina SLE</h1>
          <p className="text-[28px] text-white">mamaguevazo digo glu glu glu</p>
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
          <div className="z-[7] w-1/2 min-h-[calc(100vh-92px)] bg-[#F4F4F4] flex justify-center items-center lg:pl-[20vw]">
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
          <div className="z-[7] w-1/2 min-h-[calc(100vh-92px)] bg-[#F4F4F4] flex justify-center items-center lg:pl-[20vw]">
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
          <div className="w-1/2 min-h-[calc(100vh-92px)] bg-[#8E9BFF] rounded-tr-[100px]">
            
          </div>
          <div className="z-[7] w-1/2 bg-[#6C00E6] min-h-[calc(100vh-92px)] bg-[#F4F4F4] flex justify-center items-center lg:pr-[20vw]">
            <div className='flex flex-col gap-8 w-3/4'>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
