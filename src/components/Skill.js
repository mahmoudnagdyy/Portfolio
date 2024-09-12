import '../css/skill.css'


function Skill(props) {
    return (
        <div className="flex flex-col items-center cursor-default">
            <p className={props.className}>{props.icon}</p>
            <p className='uppercase font-bold text-lg'>{props.name}</p>
        </div >
    )
}

export default Skill;