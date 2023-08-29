"use client"
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "@/assets/images/logo.png"
import { useEffect, useState } from "react";
import { BsCodeSlash } from "react-icons/bs"
const Navbar = () => {
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
        console.log(isShow)
    }, [isShow])
    return (
        <nav className={`${styles.navbar_container} max-w-screen-2xl h-full w-full`}>
            <div className={`${styles.navbar_section} max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4`}>
                <a className={`${styles.navbar_logo} flex items-center`} href="https://github.com/Josumaru">
                    <Image className={`${styles.navbar_images} h-8 w-8 mr-3`} src={logo} alt={"Logo"}></Image>
                    <span className={`${styles.navbar_brand} self-center text-xl font-semibold`}>Josumaru</span>
                </a>

                <div className={`${styles.navbar_button} flex md:order-2`}>
                    <a className={`${styles.navbar_button} bg-emerald-500 py-1 px-2 rounded-full border border-transparent hover:border-emerald-500 hover:bg-transparent hidden md:flex hover:text-emerald-500 text-md font-medium`} href={"mailto:jokosupriyanto@gmail.com"}>Contact Me</a>
                    <button onClick={() => setIsShow(!isShow)} className={`${styles.navbar_button} bg-emerald-500 py-1 w-14 flex items-center justify-center px-2 rounded-full border border-transparent hover:border-emerald-500 hover:bg-transparent md:hidden hover:text-emerald-500 text-md font-medium`}><BsCodeSlash></BsCodeSlash></button>
                </div>

                <div className={`${styles.navbar_unorder} ${isShow ? styles.show : styles.hide} bg-gray-700 md:bg-transparent overflow-hidden rounded-md my-4 w-full md:flex md:order-1 md:w-auto items-center justify-between`} id="navbar-sticky">
                    <ul className={``}>
                        <li>
                            <a className={`${styles.navbar_list} font-medium cursor-pointer block py-2 pl-3 pr-4 text-white md:bg-transparent hover:text-emerald-500 md:text-emerald-500 `} aria-current="page">Home</a>
                        </li>

                    </ul>
                    <ul>
                        <li>
                            <a className={`${styles.navbar_list} font-medium cursor-pointer block py-2 pl-3 pr-4 text-white md:bg-transparent hover:text-emerald-500`}>Skills</a>
                        </li>

                    </ul>
                    <ul>
                        <li>
                            <a className={`${styles.navbar_list} font-medium cursor-pointer block py-2 pl-3 pr-4 text-white md:bg-transparent hover:text-emerald-500`}>Project</a>
                        </li>

                    </ul>
                    <ul>
                        <li>
                            <a className={`${styles.navbar_list} font-medium cursor-pointer block py-2 pl-3 pr-4 text-white md:bg-transparent  hover:text-emerald-500`}>About Me</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;