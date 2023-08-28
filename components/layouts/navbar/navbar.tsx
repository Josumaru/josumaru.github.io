import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "@/assets/images/logo.png"

const Navbar = () => {
    return (
        <nav className={`${styles.navbar_container} max-w-screen-2xl w-full `}>
            <div className={`${styles.navbar_logo} max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4`}>
                <a className={`${styles.navbar_logo} flex items-center`} href="https://github.com/Josumaru">
                    <Image className={`${styles.navbar_images} h-8 w-8 mr-3`} src={logo} alt={"Logo"}></Image>
                    <span className={`${styles.navbar_brand} self-center text-xl font-semibold`}>Josumaru</span>
                </a>

                <div className={`${styles.navbar_button} flex md:order-2`}>
                    <button className={`${styles.navbar_button} bg-emerald-500 py-1 px-2 rounded-md text-md font-medium`} >Contact Me</button>
                    {/* <button></button> */}
                </div>

                <div className={`${styles.navbar_unorder} hidden w-full md:flex md:order-1 md:w-auto items-center justify-between`} id="navbar-sticky">
                    <ul>
                        <li>
                            <a className={`${styles.navbar_list} font-medium cursor-pointer block py-2 pl-3 pr-4 text-white bg-emerald-500 md:bg-transparent hover:text-emerald-500 md:text-emerald-500 `} aria-current="page">Home</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a className={`${styles.navbar_list} font-medium cursor-pointer block py-2 pl-3 pr-4 text-white bg-emerald-500 md:bg-transparent hover:text-emerald-500`}>Skills</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a className={`${styles.navbar_list} font-medium cursor-pointer block py-2 pl-3 pr-4 text-white bg-emerald-500 md:bg-transparent hover:text-emerald-500`}>Project</a>
                        </li>
                    </ul>
                     <ul>
                        <li>
                            <a className={`${styles.navbar_list} font-medium cursor-pointer block py-2 pl-3 pr-4 text-white bg-emerald-500 md:bg-transparent  hover:text-emerald-500`}>About Me</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar;