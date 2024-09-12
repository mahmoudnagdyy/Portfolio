import { Bounce, Fade, Zoom } from 'react-reveal';
import '../css/prepared.css'
import { useNavigate } from 'react-router-dom';


function Prepared(props) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Contact");
        window.scrollTo(0, 0);
    }

    return (
        <section className={props.darkmode ? "flex flex-col justify-center items-center prepared_container prepared_dark" : "flex flex-col justify-center items-center prepared_container"}>

            <Zoom >
                <h1 className="capitalize font-bold text-4xl text-center">prepared to turn your ideas into <br /> reality? i'm here to help</h1>
                <button className='capitalize font-bold color contact_link text-white my-8 py-4 px-8 text-xl rounded-lg hover:scale-110 duration-500' to='/Contact' onClick={handleClick}>Contact me</button>
            </Zoom>

        </section>
    )
}

export default Prepared;