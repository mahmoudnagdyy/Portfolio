import '../css/home.css'
import { TypeAnimation } from 'react-type-animation';

import personalImg from '../imgs/personal_img.png'

import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";


function Home(props) {

    const personal_links = [
        // { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/mahmoudnagdy/', key: 1 },
        { icon: <BsGithub />, href: 'https://github.com/mahmoudnagdyy?tab=repositories', key: 2 },
        { icon: <FaFacebookF />, href: 'https://www.facebook.com/mahmoudnagdyy', key: 3 },
        { icon: <FaInstagram />, href: 'https://www.instagram.com/mahmoud.nagdyy/', key: 4 },
        { icon: <FaWhatsapp />, href: 'https://wa.link/hkgo15', key: 5 },
    ]

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            document.querySelector(".arrow_top").classList.add("arrow_show");
            document.querySelector(".arrow_top").classList.remove("arrow_hide");
        }

        else {
            document.querySelector(".arrow_top").classList.add("arrow_hide");
            document.querySelector(".arrow_top").classList.remove("arrow_show");
        }
    })


    return (
        <section className="flex flex-row justify-evenly items-center home_container">

            <a href='#' className='fixed bottom-0 right-0 text-3xl z-50 bg-white p-3 rounded-full text-orange-500 arrow_hide arrow_top'><MdOutlineKeyboardArrowUp /></a>

            <div className='flex flex-col personal_info'>

                <TypeAnimation className='type animate__animated animate__bounceInDown'
                    sequence={[
                        'Frontend',
                        1000,
                        'Frontend Developer',
                        1000,
                        'Frontend',
                        1000,
                        '',
                        1000,
                        'Embedded',
                        1000,
                        'Embedded Developer',
                        1000,
                        'Embedded',
                        1000,
                        '',
                        1000,
                    ]}
                    style={{ fontSize: '1.5em', fontWeight: "bold", color: "#fe705a" }}
                    repeat={Infinity}
                />

                <p className='capitalize font-bold text-xl hello_p mt-3 animate__animated animate__bounceInDown animate__fast'>hello, i'm</p>

                <h1 className='capitalize font-bold text-5xl mt-3 name animate__animated animate__bounceInDown animate__fast'>mahmoud nagdy</h1>

                <p className='first-letter:capitalize quote_p font-medium mt-3 animate__animated animate__bounceInDown animate__fast'>a son asked his father (a programmer), why the sun rises on the east and sets on the west. His response? It works don't touch.</p>

                <div className='flex flex-row mt-8 links_container animate__animated animate__bounceInDown animate__fast'>

                    {
                        personal_links.map((link) => {
                            return <a key={link.key} target='_blank' className='text-2xl mr-6 hover:text-orange-500 hover:scale-125 duration-500' href={link.href}>{link.icon}</a>
                        })
                    }

                </div>
            </div>


            <img className={props.darkmode ? 'personal_img personalImg_Shadow' : 'personal_img'} src={personalImg} />

        </section>
    )
}

export default Home;