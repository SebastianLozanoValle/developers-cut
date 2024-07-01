import { InnerSpinner } from "@/components/general/InnerSpinner"
import { LandingDesktop } from "@/components/landing/LandingDesktop"
import { LandingMobile } from "@/components/landing/LandingMobile"
import { useIsMobile } from "@/hooks/useIsMobile"
import { WhatsappButton } from "../general/WhartsappButton"

export const Landing = () => {

    const isMobile = useIsMobile()

    return (
        <>
            <InnerSpinner />
            {
                isMobile ? <LandingMobile /> : <LandingDesktop />
            }
            <WhatsappButton />
        </>
    )
}