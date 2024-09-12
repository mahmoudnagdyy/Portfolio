import '../css/footer.css'

import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



function Footer() {

    const personal_links = [
        // { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/mahmoudnagdy/', key: 1 },
        { icon: <BsGithub />, href: 'https://github.com/mahmoudnagdyy?tab=repositories', key: 2 },
        { icon: <FaFacebookF />, href: 'https://www.facebook.com/mahmoudnagdyy', key: 3 },
        { icon: <FaInstagram />, href: 'https://www.instagram.com/mahmoud.nagdyy/', key: 4 },
        { icon: <FaWhatsapp />, href: 'https://wa.link/hkgo15', key: 5 },
        { icon: <SiGmail />, href: 'mailto:mahmoudnagdy65@gmail.com', key: 6 },
    ]


    return (
        <footer className='flex flex-col justify-center items-center w-full'>

            <div className='flex flex-row links_container'>

                {
                    personal_links.map((link) => {
                        return <a key={link.key} target='_blank' className='text-2xl mr-6 text-white hover:text-orange-500 hover:scale-125 duration-500' href={link.href}>{link.icon}</a>
                    })
                }

            </div>

            <p className='text-white mt-8 text-center'>Developed and powered by Mahmoud Nagdy</p>

        </footer>
    )
}

export default Footer;