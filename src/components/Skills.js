import Skill from "./Skill";

import '../css/skills.css'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoJquery } from "react-icons/bi";
import { Fade } from "react-reveal";


function Skills() {
    return (
        <Fade bottom>
            <div className="flex flex-col w-full justify-evenly items-center mt-14">

                <div className="flex flex-row items-center justify-evenly w-full">

                    <Skill icon={<FaHtml5 />} name='html' className='text-3xl text-orange-500' />
                    <Skill icon={<FaCss3Alt />} name='css' className='text-3xl text-cyan-400' />
                    <Skill icon={<RiJavascriptFill />} name='js' className='text-4xl text-yellow-500' />
                    <Skill icon={<BiLogoJquery />} name='jquery' className='text-4xl text-fuchsia-600' />

                </div>


                <div className="flex flex-row items-center justify-evenly w-full mt-5">

                    <Skill icon={<FaReact />} name='react' className='text-4xl text-blue-400' />
                    <Skill icon={<FaBootstrap />} name='bootstrap' className='text-4xl text-blue-400' />
                    <Skill icon={<RiTailwindCssFill />} name='tailwind' className='text-4xl text-blue-400' />

                </div>

            </div>
        </Fade>
    )
}

export default Skills;