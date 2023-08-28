import styles from "./header.module.css"
import Image from "next/image";
import person from "@/assets/images/person.jpg"

const Header = () => {
    return (
        <div className={`${styles.header_container} w-full h-screen flex overflow-hidden`}>


            <div className={`${styles.header_left} w-1/2 h-full flex flex-col justify-center p-4`} data-aos="fade-right">
                <div>
                    <span>Hello, </span>
                    <span className={`text-emerald-500`}>Im</span>
                </div>
                <p className={`${styles.header_name} py-1 font-bold text-emerald-500`}>Joko Supriyanto</p>
                <p className={`py-1 font-semibold`} >Programer</p>
                <p className={`py-1 font-light`}>Currenty im studing in Muhammadiyah Surakarta University and looking for jobs with computer science or machine learning</p>
                <button className={`py-1 bg-emerald-500 w-36 p-1 rounded-md my-2 shadow-2xl`}>Send Me Email</button>
                <div className={`py-1`}>
                    <p>Find me on</p>
                    <div>

                    </div>
                </div>
            </div>
            <div className={`${styles.header_right} w-1/2 flex items-center justify-center`} data-aos="fade-left">
                <Image className={`${styles.header_person} w-80 h-80`} src={person} alt={"person"}></Image>
            </div>
        </div>
    )
}

export default Header;