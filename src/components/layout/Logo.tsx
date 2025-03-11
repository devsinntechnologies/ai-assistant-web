"use client"
import Image from "next/image";
import Link from "next/link";


const Logo = () => {

    return (
        <Link
            href="/"
            className="w-[40px] sm:w-[145px] items-baseline md:items-center justify-center flex "
        >
            <div className="flex items-end gap-2">
                <Image priority width={40} height={40} src={"/logo.svg"} alt="Ai Asistant" className="" />
                <h1 className="text-3xl font-bold text-[#49454F] ">PAAI</h1>
            </div>
        </Link>
    )
}
export default Logo