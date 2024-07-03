import { ContactForm } from "@/components/forms/ContactForm";
import { InnerSpinner } from "@/components/general/InnerSpinner";
import { BlogLanding } from "@/components/pages/BlogLanding";

export default function Home() {
    return (
        <>
            <InnerSpinner />
            <BlogLanding />
        </>
    )
}