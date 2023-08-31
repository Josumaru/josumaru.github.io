import styles from "./skills.module.css"
import Image from "next/image";
import reactIcon from "@/assets/images/react.png"
const Skills = () => {
    return (
        <div className={`${styles.skills_container} w-full h-screen p-4`}>
            <div className={`font-semibold`}>
                <span>My</span>
                <span className={`text-emerald-500`}> Techical Skill</span>
            </div>
            <div className={`${styles.skills_section} flex gap-7 overflow-hidden`}>
                <div className={`${styles.skills_subsection} px-5 my-4 rounded-md h-80 flex items-center flex-col`} data-aos="fade-up-right">
                    <Image className={`w-1/3 py-4`} src={reactIcon} alt={"React JS"}></Image>
                    <p className={`font-semibold`}>React JS</p>
                    <p>I cant use React JS</p>
                </div>
                <div className={`${styles.skills_subsection} my-4 rounded-md h-80`} data-aos="fade-up"></div>
                <div className={`${styles.skills_subsection} my-4 rounded-md h-80`} data-aos="fade-up-left"></div>
            </div>

        </div>
    )
}

export default Skills;