import { Fade } from 'react-reveal';
import '../css/internships.css'


import Internship from "./Internship";

function Internships() {
    return (
        <Fade bottom>
            <div className="flex flex-row w-full items-center justify-around mt-14 internships_container">

                <Internship position='member' organization='ieee-zsb ras' track='embedded system' date='2023' />
                <Internship position='member' organization='gdsc-azhar' track='embedded system' date='2024' />
                <Internship position='trainee' organization='fuzetek' track='embedded system' date='2024' />
                <Internship position='trainee' organization='iti-minya' track='frontend' date='2024' />
                <Internship position='trainee' organization='iti-suez canal' track='frontend' date='2024' />

            </div>
        </Fade>
    )
}

export default Internships;