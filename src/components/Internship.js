import '../css/internship.css'
import { MdOutlineDateRange } from "react-icons/md";

function Internship(props) {

    const position = <h3 className='capitalize font-bold text-lg'>{props.position}</h3>
    const organization = <p className='font-medium uppercase bachelor'>{props.organization}</p>
    const track = <p className='depart capitalize'>{props.track}</p>
    const date = <p className='flex flex-row text-orange-500 capitalize text-lg'>
        <MdOutlineDateRange className='mt-1 mr-1' />
        {props.date}
    </p>

    return (
        <div className="flex flex-row items-center intern_container cursor-default">
            <div className='pole mr-5'>
                <div className='ball'></div>
            </div>

            <div className='intern_info'>
                {position}
                {organization}
                {track}
                {date}
            </div>

        </div>
    )
}

export default Internship;