import styles from "./about.module.css"
import person from "@/assets/images/person.jpg"
import Image from "next/image"
import { DiCode } from "react-icons/di"

const About = () => {
    return (
        <div className={`${styles.about_container} h-screen`} id={"about"}>
            <div className={`py-4 font-bold`} data-aos={"fade-right"}>
                <p>About <span className={`text-emerald-500`}>Me</span></p>
            </div>
            <div className={`${styles.about_section} flex`}>
                <div className={``} data-aos={"fade-right"}>
                    <p className={`py-1 text-gray-400`}>Hello, my name is Joko Supriyanto, I like learning a lot about technology, especially Web Development, AI and machine learning, I want to create a product that can change the world</p>
                    <p className={`py-1 text-gray-400`} >I also learned about Cyber Security, Cryptography and how networks work</p>
                    <p className={`py-1 text-gray-400`}>I am currently studying at Muhammadiyah University of Surakarta since 2022 in informatics engineering. I wish I could be the 1% engineer in the world</p>
                    <p className={`py-1 text-gray-400`}>These are some of the technologies I use in several projects :</p>
                    <div className={`flex`}>
                        <div  className={`text-gray-400`}>
                            <div className={`flex `}>
                                <DiCode className={`text-emerald-400 text-2xl`} />
                                <p>Python</p>
                            </div>
                            <div className={`flex`}>
                                <DiCode className={`text-emerald-400 text-2xl`} />
                                <p>Electron</p>
                            </div>
                            <div className={`flex`}>
                                <DiCode className={`text-emerald-400 text-2xl`} />
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div className={`px-10 text-gray-400`}>
                            <div className={`flex`}>
                                <DiCode className={`text-emerald-400 text-2xl`} />
                                <p>React</p>
                            </div>
                            <div className={`flex`}>
                                <DiCode className={`text-emerald-400 text-2xl`} />
                                <p>NEXT</p>
                            </div>
                            <div className={`flex`}>
                                <DiCode className={`text-emerald-400 text-2xl`} />
                                <p>TypeScript</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.person_container} w-1/2 h-full relative group`} data-aos={"fade-left"}>
                    <div className={`w-80 h-80 absolute z-20 group-hover:h-72`}>
                        <Image className={`rounded-md`} src={person} alt="Person" />
                    </div>
                    <div className={`absolute rounded-md ease-in-out duration-500 z-30 bg-emerald-800 opacity-10 group-hover:bg-transparent h-80 w-80`}></div>
                    <div className={`${styles.person_border} w-80 h-80 rounded-md bg-transparent border-2 translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:text-emerald-300 ease-in-out duration-500 border-emerald-500 `}></div>
                </div>
            </div>
        </div>
    )
};

export default About;
