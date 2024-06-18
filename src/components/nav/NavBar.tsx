import Image from "next/image"
import { NavigationLink } from "./NavigationLink"
import Link from "next/link"

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
    return (
        <nav className="flex items-center z-[10] p-8 sticky top-0 bg-white text-black">
            <Link href='/' className="w-1/3">
                <Image src="/next.svg" alt="logo" width={100} height={100} />
            </Link>
            <ul className="flex justify-between w-2/3">
            {
                navlinks.map((link, index) => (
                <li key={link.href + index}>
                    <NavigationLink href={link.href}>
                    {link.text}
                    </NavigationLink>
                </li>
                ))
            }
            </ul>
        </nav>
    )
}