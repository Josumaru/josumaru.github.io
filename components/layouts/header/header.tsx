import styles from "./header.module.css"
import Image from "next/image";
import person from "@/assets/images/person.jpg"
import Spline from "@/components/elements/spline/spline";
import ParticlesContainer from "@/components/elements/particles/particles";

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
                <button className={`py-1 bg-emerald-500 w-36 p-1 rounded-md my-2 shadow shadow-emerald-500`}>Send Me Email</button>
                <div className={`py-1`}>
                    <p>Find me on</p>
                    <div>

                    </div>
                </div>
            </div>
            <div className={`${styles.header_right} w-1/2 flex items-center justify-center`} data-aos="fade-left">
                <Spline />
                {/* <Image className={`${styles.header_person} w-80 h-80`} src={person} alt={"person"}></Image> */}
            </div>
        </div>
    )
}

export default Header;