import { BsWhatsapp } from "react-icons/bs"

export const WhatsappButton = () => {
    return (
        <a href="#" className="rounded-full fixed bottom-5 right-5 p-2 text-green-500 border-4 border-green-500 z-[9]">
            <BsWhatsapp className="text-5xl" />
        </a>
    )
}