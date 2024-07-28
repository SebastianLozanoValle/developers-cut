// import Link from "next/link";
// import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
// import { BsTwitterX, BsGithub } from "react-icons/bs";


// const glosary = {
//     footer: {
//         columns: [
//             {
//                 tittle: 'servicios',
//                 items: [
//                     {
//                         text: 'desarrollo web',
//                         link: '/'
//                     },
//                     {
//                         text: 'tiendas ecommerce',
//                         link: '/'
//                     },
//                     {
//                         text: 'desarrollo movil',
//                         link: '/'
//                     },
//                     {
//                         text: 'diseño UX/UI',
//                         link: '/'
//                     },
//                 ]
//             },
//             {
//                 tittle: 'manejamos',
//                 items: [
//                     {
//                         text: 'Paginas Web',
//                         link: '/'
//                     },
//                     {
//                         text: 'Aplicaciones mobiles',
//                         link: '/'
//                     },
//                     {
//                         text: 'Soluciones de Software Empresarial',
//                         link: '/'
//                     },
//                     {
//                         text: 'E-Commerce',
//                         link: '/'
//                     },
//                 ]
//             },
//             {
//                 tittle: 'politicas',
//                 items: [
//                     {
//                         text: 'política de privacidad',
//                         link: '/'
//                     },
//                     {
//                         text: 'política de tratamiento de datos',
//                         link: '/'
//                     },
//                     {
//                         text: 'políticas de cookies',
//                         link: '/'
//                     },
//                     {
//                         text: 'términos & condiciones',
//                         link: '/'
//                     },
//                 ]
//             },
//         ],
//         subcribe: 'suscríbete',
//         placeholder: 'correo electrónico',
//         submit: 'enviar',
//         media: {
//             fb: '/',
//             ig: '/',
//             x: '/',
//             git: '/',
//             yt: '/',
//         }
//     },
// }

// export const Footer = () => {
//     return (
//         <div className="footer-container">
//             <div className="logo-media">
//                 <Link href={"/"} className="logo-compuesto">SLE
//                 </Link>
//                 <div className="media">
//                     <Link href={glosary.footer.media.fb} target="_blank">
//                         <IoLogoFacebook />
//                     </Link>
//                     <Link href={glosary.footer.media.ig} target="_blank">
//                         <IoLogoInstagram />
//                     </Link>
//                     <Link href={glosary.footer.media.x} target="_blank">
//                         <BsTwitterX />
//                     </Link>
//                     <Link href={glosary.footer.media.git} target="_blank">
//                         <BsGithub />
//                     </Link>
//                     <Link href={glosary.footer.media.yt} target="_blank">
//                         <IoLogoYoutube />
//                     </Link>
//                 </div>
//             </div>
//             {
//                 glosary.footer.columns.map((column: any, index: number) => (
//                     <div className="footer-column" key={index+"footerColumn"}>
//                         <h3>
//                             {column.tittle}
//                         </h3>
//                         <ul>
//                             {
//                                 column.items.map((item:any, index:number) => (
//                                     <li key={index+column.tittle+'linkFooter'}>
//                                         <Link href={item.link}>{item.text}</Link>
//                                     </li>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                 ))
//             }
//             <div className="subscription">
//                 <h3>{glosary.footer.subcribe}</h3>
//                 <form action="">
//                     <div className="subscription-field-container">
//                         <input type="email" placeholder="jhondoe@email.com" />
//                         <button type="submit">{glosary.footer.submit}</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

import Link from "next/link";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
import { BsTwitterX, BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import { GiHoneycomb } from "react-icons/gi";

export const Footer = () => {
    return (
        <div className="relative bg-white p-10 z-10 flex items-center">
            <div className="flex flex-col gap-4 w-[200px]">
                <Link href='/'>
                    <Image src="/logo.svg" alt="logo" width={100} height={100} />
                </Link>
            </div>
            <div className="flex-1 text-center">
                <p>© 2024 <Link className="text-[#6c00e6]" href={'/'}>SLE Development</Link>. All rights reserved.</p>
            </div>
            <div className="flex justify-around w-[200px]"> 
                    {/* <Link href='/' target="_blank">
                        <IoLogoFacebook />
                    </Link>
                    <Link href={'/'} target="_blank">
                        <IoLogoInstagram />
                    </Link>
                    <Link href={'/'} target="_blank">
                        <BsTwitterX />
                    </Link>
                    <Link href={'/'} target="_blank">
                        <BsGithub />
                    </Link>
                    <Link href={'/'} target="_blank">
                        <IoLogoYoutube />
                    </Link> */}
                    {/* <Link href={'/'} className="text-3xl transition-all ease-in-out duration-500 hover:scale-150 transform">
                        <FaLinkedin />
                    </Link> */}
                    <div>
                        <a href="mailto:info@sledevelopment.com" className="text-white px-4 py-2 font-bold flex gap-2 items-center sle-btn">
                            <GiHoneycomb className="text-2xl capitalize" />
                            Contactanos!
                        </a>
                    </div>
            </div>
        </div>
    )
}
