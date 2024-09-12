import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


function EmbeddedProject(props) {
    return (
        <div className='flex flex-col project relative rounded-2xl p-2 mb-10'>

            <div className='flex flex-row w-full h-fit items-center justify-center absolute project_links rounded-2xl'>

                {
                    props.inShow == 1 ? <a target='_blank' title='Linkedin' className='text-white text-xl bg-black p-3 rounded-full mr-2' href={props.LinkedinLink}><FaLinkedinIn /></a> : null
                }

                {
                    props.GitShow == 1 ? <a target='_blank' title='Github' className='text-white text-xl bg-black p-3 rounded-full' href={props.GithubLink}><FiGithub /></a> : null
                }
            </div>

            <img className='rounded-2xl' src={props.projectImg} />

            <h3 className='font-bold capitalize text-2xl mt-4 ml-4'>{props.projectName}</h3>

        </div>
    )
}

export default EmbeddedProject;