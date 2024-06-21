'use client'
import Image from "next/image"
import { NavigationLink } from "./NavigationLink"
import Link from "next/link"
import { useIsMobile } from "@/hooks/useIsMobile"
import { useState } from "react"
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const navlinks = [
    {
      href: '/0',
      text: 'Servicios'
    },
    {
      href: '/1',
      text: 'Servicios'
    },
    {
      href: '/2',
      text: 'Servicios'
    },
    {
      href: '/3',
      text: 'Servicios'
    }
  ]

export const NavBar = () => {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`flex items-center z-[10] p-8 sticky top-0 bg-white text-black ${isMobile && 'justify-between'}`}>
        <Link href='/' className="w-1/3" onClick={() => setIsOpen(false)}>
            <Image src="/next.svg" alt="logo" width={100} height={100} />
        </Link>
        <div className={`fixed top-[100px] right-0  bg-[#6C00E6] transition-all ease-in-out duration-500 ${isOpen ? 'w-screen h-[calc(100vh-100px)] rounded-bl-none' : 'w-0 h-0 rounded-bl-3xl'}`}></div>
        <ul className={`justify-between w-2/3 transition duration-500 ease-in-out ${isMobile ? 'text-center fixed flex-col' : 'flex'} ${isOpen ? 'left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]' : '-right-[2000px]'}`}>
        {
            navlinks.map((link, index) => (
            <li className={`${isMobile ? 'py-[10%]' : ''}`} key={link.href + index}>
                <NavigationLink href={link.href}>
                {link.text}
                </NavigationLink>
            </li>
            ))
        }
        </ul>
        {
          isMobile && (
            <div
              className="text-4xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <RxCross2 /> : <IoIosMenu /> }
            </div>
          )
        }
    </nav>
  )
}