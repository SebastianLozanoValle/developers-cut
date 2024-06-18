'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'

interface NavigationLinkProps {
    href: string;
    children: React.ReactNode;
  }
  
export const NavigationLink: React.FC<NavigationLinkProps> = ({ href, children }) => {

    const pathname = usePathname()

    return (
        <Link
            className={`navegation-link font-extrabold text-xl
                        ${pathname === href ? 'active' : ''}`}
            href={href}>
            {children}
        </Link>
    )
}