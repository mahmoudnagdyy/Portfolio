import { Fade } from 'react-reveal';
import '../css/education.css'

import { MdOutlineDateRange } from "react-icons/md";


function Education() {

    const university = <h3 className='capitalize font-bold text-lg'>zagazig university</h3>
    const bachelor = <p className='font-medium first-letter:capitalize bachelor'>bachelor's degree</p>
    const department = <p className='depart'>Computer and System Engineering</p>
    const date = <p className='flex flex-row text-orange-500 capitalize text-lg'>
        <MdOutlineDateRange className='mt-1 mr-1' />
        2020 - present
    </p>


    return (
        <Fade bottom>
            <div className='edu_container flex flex-row mt-14 cursor-default'>

                <div className='pole mr-5'>
                    <div className='ball'></div>
                </div>

                <div className='edu_info'>
                    {university}
                    {bachelor}
                    {department}
                    {date}
                </div>

            </div>
        </Fade>
    )
}

export default Education;