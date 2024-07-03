import Link from "next/link"

export const BlogNav = () => {
    return (
        <div className="pt-5 pl-10 pr-8 flex justify-between items-center backdrop-blur-sm bg-[rgb(213, 218, 255/30)]">
            <div className="flex gap-8 items-center">
                <Link className="text-3xl font-extrabold" href={'/'}>SLE</Link>
            </div>
            <button className="font-bold text-xl">
                En / Es
            </button>
        </div>
    )
}