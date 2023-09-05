"use client"
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "@/assets/images/logo.png"
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BsCodeSlash } from "react-icons/bs"
import { ImHome } from "react-icons/im"
import { IoMdGitNetwork } from "react-icons/io"
import { BsPersonLinesFill, BsLightningCharge } from "react-icons/bs"


import AOS from "aos"
import "aos/dist/aos.css"

const Navbar = () => {
    const navRef = useRef<string | any>("");
    const [isShow, setIsShow] = useState(false);
    const [isSideBar, setIsSideBar] = useState(false);
    const [isActive, setIsActive] = useState("")

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const target = href.replace(/.*\#/, "");
        const element = document.getElementById(target)!
        element.scrollIntoView({
            behavior: "smooth"
        })
        setIsActive(target);
        if (isShow) setIsShow(!isShow)
        if (target != "home") {
            setIsSideBar(true);
        } else {
            setIsSideBar(false);
        }
    }

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])
    return (
        <nav className={`${styles.navbar_container} ${isSideBar ? "fixed" : " top-0"} z-20 max-[768px]:bottom-0 max-w-screen-2xl w-full`}>
            <div className={`${styles.navbar_section} ${isSideBar ? "hidden" : "flex"} max-w-screen-2xl flex-wrap items-center justify-between mx-auto p-4 `}>
                <a className={`${styles.navbar_logo} flex items-center`} href="https://github.com/Josumaru" data-aos={`fade-right`}>
                    <Image className={`${styles.navbar_images} h-8 w-8 mr-3`} src={logo} alt={"Logo"}></Image>
                    <span className={`${styles.navbar_brand} self-center text-xl font-semibold`}>Josumaru</span>
                </a>

                <div className={`${styles.navbar_button} flex md:order-2`} data-aos={`fade-left`}>
                    <a className={`${styles.navbar_button} bg-emerald-500 py-1 px-2 rounded-full border border-transparent hover:border-emerald-500 hover:bg-transparent hidden md:flex hover:text-emerald-500 text-md font-medium`} href={"mailto:jokosupriyanto@gmail.com"}>Contact Me</a>
                    <button onClick={() => setIsShow(!isShow)} className={`${styles.navbar_button} bg-emerald-500 py-1 w-14 flex items-center justify-center px-2 rounded-full border border-transparent hover:border-emerald-500 hover:bg-transparent md:hidden hover:text-emerald-500 text-md font-medium`}><BsCodeSlash></BsCodeSlash></button>
                </div>

                <div className={`${styles.navbar_unorder} ${isShow ? styles.show : styles.hide} bg-gray-700 md:bg-transparent overflow-hidden rounded-md my-4 w-full md:flex md:order-1 md:w-auto items-center justify-between`} id="navbar-sticky">
                    <ul className={`flex flex-col md:flex-row`} data-aos={"fade-down"}>
                        <Link href={"#home"} onClick={handleScroll}>
                            <li className={`${styles.navbar_list} font-medium cursor-pointer block py-2 pl-3 pr-4 text-white md:bg-transparent hover:text-emerald-500 md:text-emerald-500 `} aria-current="page">Home</li>
                        </Link>
                        <Link href={"#skills"} onClick={handleScroll}>
                            <li className={`${styles.navbar_list} font-medium cursor-pointer block py-2 pl-3 pr-4 text-white md:bg-transparent hover:text-emerald-500`}>Skills</li>
                        </Link>
                        <Link href={"#project"} onClick={handleScroll}>
                            <li className={`${styles.navbar_list} font-medium cursor-pointer block py-2 pl-3 pr-4 text-white md:bg-transparent hover:text-emerald-500`}>Project</li>
                        </Link>
                        <Link href={"#about"} onClick={handleScroll}>
                            <li className={`${styles.navbar_list} font-medium cursor-pointer block py-2 pl-3 pr-4 text-white md:bg-transparent  hover:text-emerald-500`}>About Me</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="h-auto flex justify-end">
                <div className={`${styles.sidebar} ${isSideBar ? "fixed" : "hidden"} px-8 md:px-0 text-emerald-50 text-2xl flex md:flex-col clear-both items-center justify-between w-full h-16 bottom-0  bg-gray-700 md:translate-y-1/2 md:bottom-1/2 md:right-0 md:mx-8 md:w-12 md:h-56 md:rounded-full`}>
                    <Link className={`${isActive == "home" ? styles.active : styles.nonactive}`} href={"#home"} onClick={handleScroll}>
                        <ImHome className={`mx-2 md:my-2 nav-link`} />
                    </Link>
                    <Link className={`${isActive == "skills" ? styles.active : styles.nonactive}`} href={"#skills"} onClick={handleScroll}>
                        <BsLightningCharge className={`mx-2 md:my-2 nav-link avtive`} />
                    </Link>
                    <Link className={`${isActive == "project" ? styles.active : styles.nonactive}`} href={"#project"} onClick={handleScroll}>
                        <IoMdGitNetwork className={`mx-2 md:my-2 nav-link`} />
                    </Link>
                    <Link className={`${isActive == "about" ? styles.active : styles.nonactive}`} href={"#about"} onClick={handleScroll}>
                        <BsPersonLinesFill className={`mx-2 md:my-2 nav-link`} />
                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;