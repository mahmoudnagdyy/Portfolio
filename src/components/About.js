import '../css/about.css'

import dots_light from '../imgs/dots-light.svg'
import dots_dark from '../imgs/dots-dark.svg'
import { useState } from 'react'
import Education from './Education'
import Internships from './Internships'
import Skills from './Skills'

import Fade from 'react-reveal/Fade';


function About(props) {

    const aboutHead = <h1 className="flex flex-row capitalize font-bold text-4xl">
        <img className='mr-3' src={props.darkmode ? dots_dark : dots_light} />
        about me
    </h1>


    const [activeButton, setActiveButton] = useState(1);

    return (
        <section className={props.darkmode ? "flex flex-col items-center mt-40 about_container" : "flex flex-col items-center mt-40 about_light about_container"}>

            <Fade bottom>
                {aboutHead}
            </Fade>


            <Fade bottom>
                <div className={props.darkmode ? 'flex flex-row flex-wrap mt-16 buttons_container_dark py-1 px-1 rounded-full buttons_container' : 'flex flex-row flex-wrap mt-16 buttons_container_light py-1 px-1 rounded-full buttons_container'}>
                    <button className={activeButton == 1 ? 'capitalize font-bold text-xl py-3 px-3 rounded-full active_button ' : 'capitalize font-bold text-xl py-3 px-3 rounded-full'} onClick={() => setActiveButton(1)}>education</button>
                    <button className={activeButton == 2 ? 'capitalize font-bold text-xl py-3 px-3 rounded-full active_button' : 'capitalize font-bold text-xl py-3 px-3 rounded-full'} onClick={() => setActiveButton(2)}>internships</button>
                    <button className={activeButton == 3 ? 'capitalize font-bold text-xl py-3 px-10 rounded-full active_button' : 'capitalize font-bold text-xl py-3 px-10 rounded-full'} onClick={() => setActiveButton(3)}>skills</button>
                </div>
            </Fade>




            {
                activeButton == 1 ? <Education /> : null
            }


            {
                activeButton == 2 ? <Internships /> : null
            }

            {
                activeButton == 3 ? <Skills /> : null
            }

        </section>
    )
}

export default About;