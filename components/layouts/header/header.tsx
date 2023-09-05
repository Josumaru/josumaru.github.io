import styles from "./header.module.css"
import Spline from "@/components/elements/spline/spline";
import ParticlesContainer from "@/components/elements/particles/particles";
import { PiInstagramLogoLight } from "react-icons/pi"
import { AiFillYoutube, AiFillLinkedin } from "react-icons/ai"
import Link from "next/link";

const Header = () => {
    return (
        <div className={`${styles.header_container} w-full h-screen flex overflow-hidden`} id={"home"}>
            <ParticlesContainer />
            <div className={`${styles.header_left} w-1/2 h-full flex flex-col justify-center`} data-aos="fade-right">
                <div>
                    <span className={`font-semibold text-gray-500 hover:text-gray-100 ease-in-out duration-500 cursor-default`}>Hello, </span>
                    <span className={`text-emerald-500`}>Im</span>
                </div>
                <p className={`${styles.header_name} py-1 font-bold text-emerald-500`}>Joko Supriyanto</p>
                <p className={`py-1 font-semibold text-gray-500`} >Programer</p>
                <p className={`py-1 font-medium`}>I am currently studying at the Muhammadiyah University of Surakarta and am looking for a job in computer science or machine learning and also Web development.</p>
                <Link href={"mailto:l200220240@student"} className={`py-1 border border-emerald-500 hover:border-emerald-300 hover:text-emerald-200 text-emerald-500 ease-in-out duration-200 w-36 p-1 rounded-md my-2 shadow-2xl hover:bg-emerald-500 hover:bg-opacity-25 shadow-emerald-500 text-center`}>Say Hello</Link>
                <div className={`py-1 flex`}>
                    <p>Find me on</p>
                    <span className={`hover:text-emerald-500 text-gray-500 px-2 flex items-center text-2xl`}>
                        <Link href={"https://www.instagram.com/josutomaru/"} target="_blank">
                            <PiInstagramLogoLight />
                        </Link>
                    </span>
                    <span className={`hover:text-emerald-500 text-gray-500 px-2 flex items-center text-2xl`}>
                        <Link href={"https://www.youtube.com/@josu-maru/"} target="_blank">
                            <AiFillYoutube />
                        </Link>
                    </span>
                    <span className={`hover:text-emerald-500 text-gray-500 px-2 flex items-center text-2xl`}>
                        <Link href={"https://www.linkedin.com/in/josuto/"} target="_blank">
                            <AiFillLinkedin />
                        </Link>
                    </span>
                </div>
            </div>
            <div className={`${styles.header_right} w-1/2 flex items-center justify-center`} data-aos="fade-left">
                <Spline />
            </div>
        </div>
    )
}

export default Header;