import Image from "next/image";
import styles from "./skillCard.module.css"
import reactIcon from "@/assets/images/react.png"
import { PiCodesandboxLogoThin } from "react-icons/pi"

const SkillCard = () => {
    return (
        <div className={`${styles.skills_subsection}  p-5 my-4 rounded-md h-5/6 flex items-center flex-col`} data-aos="fade-up-right">
            {/* <Image className={`w-1/3 py-4`} src={reactIcon} alt={"React JS"}></Image> */}
            <div className={`text-emerald-500 text-9xl`}>
                <PiCodesandboxLogoThin />
            </div>
            <p className={`font-semibold`}>React JS</p>
            <p className={`text-gray-500`}>I cant use React JS</p>
        </div>
    )
}

export default SkillCard;