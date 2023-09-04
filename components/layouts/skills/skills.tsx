import SkillCard from "@/components/elements/skillCard/skillCard";
import styles from "./skills.module.css"
import { PiCodesandboxLogoThin, PiGearSixLight } from "react-icons/pi"
import { HiOutlineServerStack } from "react-icons/hi2"

const Skills = () => {
    return (
        <div id={"skills"} className={`${styles.skills_container} w-full h-screen p-4`}>
            <div className={`font-semibold`}>
                <span>Techical </span>
                <span className={`text-emerald-500`}>Skill</span>
            </div>
            <div className={`${styles.skills_section} flex gap-7 overflow-hidden py-5 h-full items-center`}>
                <div className={`${styles.skills_subsection}  p-5 my-4 rounded-md h-5/6 flex items-center flex-col`} data-aos="fade-up-right">
                    <div className={`text-emerald-500 text-9xl py-4`}>
                        <PiCodesandboxLogoThin />
                    </div>
                    <p className={`font-semibold py-4`}>Programming</p>
                    <p className={`text-gray-500 py-4`}>I learned a lot of programming languages ​​such as C++, Python, JavaScript, SQL, etc</p>
                </div>
                <div className={`${styles.skills_subsection}  p-5 my-4 rounded-md h-5/6 flex items-center flex-col`} data-aos="fade-up">
                    <div className={`text-emerald-500 text-9xl py-4`}>
                        <PiGearSixLight />
                    </div>
                    <p className={`font-semibold py-4`}>Framework</p>
                    <p className={`text-gray-500 py-5`}>My favorite framework is React but I can also use other frameworks like Vue, NEXT or Electron.</p>
                </div>
                <div className={`${styles.skills_subsection}  p-5 my-4 rounded-md h-5/6 flex items-center flex-col`} data-aos="fade-up-left">
                    <div className={`text-emerald-500 text-9xl py-4`}>
                        <HiOutlineServerStack />
                    </div>
                    <p className={`font-semibold py-4`}>Backend</p>
                    <p className={`text-gray-500 py-4`}>I can work with the backend or front end but I prefer developing on the backend server</p>
                </div>
            </div>

        </div>
    )
}

export default Skills;