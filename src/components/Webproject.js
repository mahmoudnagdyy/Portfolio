import '../css/project.css'

import { FiGithub } from "react-icons/fi";
import { IoLink } from "react-icons/io5";


function Webproject(props) {
    return (
        <div className='flex flex-col project relative rounded-2xl p-2 mb-10'>

            <div className='flex flex-row w-full h-fit items-center justify-center absolute project_links rounded-2xl'>
                <a target='_blank' title='Github' className='text-white text-xl bg-black p-3 rounded-full mr-2' href={props.GithubLink}><FiGithub /></a>
                <a target='_blank' title='Preview' className='text-white text-xl bg-black p-3 rounded-full' href={props.PreviewLink}><IoLink /></a>
            </div>

            <img className='rounded-2xl' src={props.projectImg} />

        <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-col'>
                    <h3 className='font-bold capitalize text-2xl mt-4 ml-4'>{props.projectName}</h3>
                </div>
                
                <p className='capitalize font-semibold bg-orange-500 text-white w-fit h-fit py-2 px-6 rounded-lg mt-5 ml-4 cursor-default'>{props.tool}</p>
        </div>


        </div>
    )
}

export default Webproject;