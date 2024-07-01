import Link from "next/link";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
import { BsTwitterX, BsGithub } from "react-icons/bs";


const glosary = {
    footer: {
        columns: [
            {
                tittle: 'servicios',
                items: [
                    {
                        text: 'desarrollo web',
                        link: '/'
                    },
                    {
                        text: 'tiendas ecommerce',
                        link: '/'
                    },
                    {
                        text: 'desarrollo movil',
                        link: '/'
                    },
                    {
                        text: 'diseño UX/UI',
                        link: '/'
                    },
                ]
            },
            {
                tittle: 'manejamos',
                items: [
                    {
                        text: 'Wordpress',
                        link: '/'
                    },
                    {
                        text: 'CSS',
                        link: '/'
                    },
                    {
                        text: 'HTML',
                        link: '/'
                    },
                    {
                        text: 'JavaScript',
                        link: '/'
                    },
                    {
                        text: 'DataBase',
                        link: '/'
                    },
                    {
                        text: 'Python',
                        link: '/'
                    },
                    {
                        text: 'C++',
                        link: '/'
                    },
                ]
            },
            {
                tittle: 'politicas',
                items: [
                    {
                        text: 'política de privacidad',
                        link: '/'
                    },
                    {
                        text: 'política de tratamiento de datos',
                        link: '/'
                    },
                    {
                        text: 'políticas de cookies',
                        link: '/'
                    },
                    {
                        text: 'términos & condiciones',
                        link: '/'
                    },
                ]
            },
        ],
        subcribe: 'suscríbete',
        placeholder: 'correo electrónico',
        submit: 'enviar',
        media: {
            fb: '/',
            ig: '/',
            x: '/',
            git: '/',
            yt: '/',
        }
    },
}

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="logo-media">
                <Link href={"/"} className="logo-compuesto">SLE
                </Link>
                <div className="media">
                    <Link href={glosary.footer.media.fb} target="_blank">
                        <IoLogoFacebook />
                    </Link>
                    <Link href={glosary.footer.media.ig} target="_blank">
                        <IoLogoInstagram />
                    </Link>
                    <Link href={glosary.footer.media.x} target="_blank">
                        <BsTwitterX />
                    </Link>
                    <Link href={glosary.footer.media.git} target="_blank">
                        <BsGithub />
                    </Link>
                    <Link href={glosary.footer.media.yt} target="_blank">
                        <IoLogoYoutube />
                    </Link>
                </div>
            </div>
            {
                glosary.footer.columns.map((column: any, index: number) => (
                    <div className="footer-column" key={index+"footerColumn"}>
                        <h3>
                            {column.tittle}
                        </h3>
                        <ul>
                            {
                                column.items.map((item:any, index:number) => (
                                    <li key={index+column.tittle+'linkFooter'}>
                                        <Link href={item.link}>{item.text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
            <div className="subscription">
                <h3>{glosary.footer.subcribe}</h3>
                <form action="">
                    <div className="subscription-field-container">
                        <input type="email" placeholder="jhondoe@email.com" />
                        <button type="submit">{glosary.footer.submit}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}