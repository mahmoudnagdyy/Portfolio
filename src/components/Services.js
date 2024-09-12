import '../css/services.css'
import dots_light from '../imgs/dots-light.svg'
import dots_dark from '../imgs/dots-dark.svg'

import frontendImg from '../imgs/software-developer.png'
import embeddedImg from '../imgs/artificial-intelligence.png'

import Fade from 'react-reveal/Fade';
import { Bounce, Flip, Roll, Rotate, Zoom } from 'react-reveal'


function Services(props) {
    return (
        <section className={props.darkmode ? "flex flex-col items-center services_container" : "flex flex-col items-center services_light services_container"}>

            <Fade bottom duration={1500}>
                <h1 className="flex flex-row capitalize font-bold text-4xl">
                    <img className='mr-3' src={props.darkmode ? dots_dark : dots_light} />
                    my services
                </h1>
            </Fade>



            <div className='flex flex-row w-full flex-wrap justify-evenly items-center mt-28'>

                <Fade bottom duration={1500}>
                    <div className="flex flex-col items-center service rounded-2xl py-10 px-2 cursor-default">
                        <img src={frontendImg} />
                        <h3 className='font-bold text-xl capitalize mb-4 service_track'>frontend developer</h3>
                        <p className='first-letter:capitalize text-center font-medium service_p'>i make use of my skills to build high quailty and responsive personal portfolio and landing pages.</p>
                    </div>
                </Fade>

                <Fade bottom duration={1500}>
                    <div className="flex flex-col items-center service rounded-2xl py-10 px-2 cursor-default embedded_service">
                        <img src={embeddedImg} />
                        <h3 className='font-bold text-xl capitalize mb-4 service_track'>embedded developer</h3>
                        <p className='first-letter:capitalize text-center font-medium service_p'>i'm good in deeling with microcontrollers and their peripherals like Timers, ADC, UART, Inc...</p>
                    </div>
                </Fade>

            </div>


        </section >
    )
}

export default Services;