"use client"
import styles from "./footer.module.css";
import Lottie from "lottie-react";
import LottiePlanet from "@/assets/lottie/LottiePlanet.json";
import { BiSolidSend } from "react-icons/bi"
import { FiGithub, FiInstagram } from "react-icons/fi"
import { TbBrandDiscord } from "react-icons/tb"
import { AiOutlineReddit } from "react-icons/ai"
import Image from "next/image";
import logo from "@/assets/images/logo.png"
import Link from "next/link";

const Footer = () => {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const target = href.replace(/.*\#/, "");
        const element = document.getElementById(target)!
        element.scrollIntoView({
            behavior: "smooth"
        })
    }
    return (
        <div className={`${styles.footer_container} w-full flex flex-col relative overflow-hidden p-4 inset-0 z-0`}>
            <Lottie className={`absolute`} animationData={LottiePlanet} autoPlay={true} loop={true}></Lottie>
            <div className={`${styles.footer_left} w-full h-full flex flex-row`}>
                <div className={`${styles.footer_left_section} w-1/2`} data-aos={"fade-up"}>
                    <p className={`${styles.footer_left_text} font-medium`}>Looking for <span className={`text-emerald-500`}>Jobs</span></p>
                    <h1 className={`${styles.footer_left_text} font-extrabold`}>Send Me Mail.</h1>
                    <form className={`${styles.footer_form}`}>
                        <input className={`${styles.footer_form_input} w-full ro p-2 focus-within:outline-none`} placeholder="Your Email"></input>
                        <button className={`${styles.footer_form_button} text-3xl`}><BiSolidSend></BiSolidSend></button>
                    </form>
                    <div className={`${styles.footer_form_underscore} w-full bg-white`}></div>
                </div>
            </div>
            <div className={`${styles.footer_right} w-full h-full flex flex-row`} data-aos={"fade-up"}>
                <div className={`w-full flex py-24 flex-col md:flex-row`}>
                    <div className={`w-11/12`}>
                        <div className={`flex py-2`}>
                            <Image className={`w-8 h-8`} src={logo} alt={"Logo"}></Image>
                            <p className={`font-semibold px-2 text-2xl`}>Josu</p>
                        </div>
                        <p>An application programming interface is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software.</p>
                    </div>
                </div>
                <div className={`py-24 w-1/2 flex text-gray-500`}>
                    <div className={`w-1/2 px-4`}>
                        <ul>
                            <Link href={"#home"} onClick={handleScroll}>
                                <li className={`hover:text-emerald-500 cursor-pointer`}>Home</li>
                            </Link>
                            <Link href={"#skills"} onClick={handleScroll}>
                                <li className={`hover:text-emerald-500 cursor-pointer`}>Skill</li>
                            </Link>
                            <Link href={"#project"} onClick={handleScroll}>
                                <li className={`hover:text-emerald-500 cursor-pointer`}>Project</li>
                            </Link>
                            <Link href={"#about"} onClick={handleScroll}>
                                <li className={`hover:text-emerald-500 cursor-pointer`}>About Me</li>
                            </Link>
                        </ul>
                    </div>
                    <div className={`px-5 w-1/2`}>
                        <p>Let&apos;s <span className={`text-emerald-500`}>Chat</span></p>
                        <p className={`text-gray-500 cursor-pointer hover:text-emerald-500`}>l200220240@student.ums.ac.id</p>
                        <div className={`flex justify-between text-2xl container text-gray-500 py-3`}>
                            <FiGithub className={`hover:text-emerald-500 cursor-pointer`} ></FiGithub>
                            <FiInstagram className={`hover:text-emerald-500 cursor-pointer`}></FiInstagram>
                            <TbBrandDiscord className={`hover:text-emerald-500 cursor-pointer`}></TbBrandDiscord>
                            <AiOutlineReddit className={`hover:text-emerald-500 cursor-pointer`}></AiOutlineReddit>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;
