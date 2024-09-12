import '../css/header.css'
import '../css/contact.css'
import { Link } from 'react-router-dom';

import logo from '../imgs/logo.png'

import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { PiListBold } from "react-icons/pi";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from 'react';

import Footer from './Footer';


import { motion, useScroll } from "framer-motion";

import { PiHandWavingFill } from "react-icons/pi";

import contact_light from '../imgs/illustration-light.svg'
import contact_dark from '../imgs/illustration-dark.svg'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import { IoMdDoneAll } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";



function Contact() {


    const [darkmode, setDarkMode] = useState(false);
    const [listState, setListState] = useState(false)


    const { scrollYProgress } = useScroll();

    const ActiveMode = async () => {

        setDarkMode(!darkmode);

        if (darkmode == true) {
            document.body.classList.add("light_mode");
            document.body.classList.remove("dark_mode");
            await localStorage.setItem('darkmode', 'light_mode');
        }

        if (darkmode == false) {
            document.body.classList.add("dark_mode");
            document.body.classList.remove("light_mode");
            await localStorage.setItem('darkmode', 'dark_mode');
        }


    }


    useEffect(() => {

        if (localStorage.getItem('darkmode') == 'light_mode') {
            document.body.classList.add("light_mode");
        }

        else if (localStorage.getItem('darkmode') == 'dark_mode') {
            document.body.classList.add("dark_mode");
            setDarkMode(!darkmode);
        }

    }, [])


    const [messageState, setMessageState] = useState(0);

    var c = 0;



    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_tf4vcem', 'template_jd7s2iu', form.current, {
                publicKey: 'P-LDMSCUSVSNWtvl6',
            })
            .then(
                () => {
                    console.log('SUCCESS!');

                    var name = document.getElementById('name');
                    var email = document.getElementById('email');
                    var message = document.getElementById('message');

                    name.value = ''
                    email.value = ''
                    message.value = ''
                    document.getElementById('btn').setAttribute('disabled', 'true')

                    const x = setInterval(() => {
                        setMessageState(1);
                        c++;

                        if (c == 5) {
                            setMessageState(0);
                            clearInterval(x)
                        }
                    }, 1000)


                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setMessageState(2)
                },
            );
    };


    const checkData = () => {
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value

        if (name != '' && email != '' && message != '') {
            document.getElementById('btn').removeAttribute('disabled')
        }

        else {
            document.getElementById('btn').setAttribute('disabled', 'true')
        }
    }


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
        <>

            <header id='Contact' className='flex flex-row justify-around items-center w-full h-24 duration-500'>

                <motion.div
                    className="progress-bar z-50"
                    style={{ scaleX: scrollYProgress, }}

                />

                <img className='logo' src={logo} />


                <div className='flex flex-row header_links'>

                    <Link className='capitalize font-bold text-lg mr-10 relative link_hover' to='/'>home</Link>
                    <Link className='capitalize font-bold text-lg mr-10 relative link_hover hover:text-orange-500' to='/Myprojects'>my projects</Link>
                    <Link className='capitalize font-bold text-lg mr-10 relative link_hover hover:text-orange-500' to='/Contact'>contact</Link>

                    <button onClick={ActiveMode} className={darkmode ? 'text-3xl text-white' : 'text-3xl text-orange-500'}>
                        {
                            darkmode ? <FaMoon /> : <MdSunny />
                        }
                    </button>

                </div>


                <button className={listState ? 'text-3xl list_icon opacity-0 duration-300' : 'text-3xl list_icon bg-opacity-100 duration-300'} onClick={() => setListState(true)}><PiListBold /></button>
                <div className={listState ? 'flex flex-col fixed links_list list_show z-50' : 'flex flex-col fixed links_list z-50'}>

                    <button className='text-3xl list_icon mb-5' onClick={() => setListState(false)}><CgClose /></button>

                    <Link className='capitalize font-bold text-lg mr-10 py-3 px-2 hover:bg-orange-500 hover:text-white hover:translate-x-1 duration-500' to='/'>home</Link>
                    <Link className='capitalize font-bold text-lg mr-10 py-3 px-2 hover:bg-orange-500 hover:text-white hover:translate-x-1 duration-500' to='/Myprojects'>my projects</Link>
                    <Link className='capitalize font-bold text-lg mr-10 py-3 px-2 hover:hover:bg-orange-500 hover:text-white hover:translate-x-1 duration-500' to='/Contact'>contact</Link>

                    <button onClick={ActiveMode} className={darkmode ? 'text-3xl text-white py-3' : 'text-3xl py-3 text-orange-500'}>
                        {
                            darkmode ? <FaMoon /> : <MdSunny />
                        }
                    </button>

                </div>

            </header >

            <section className='flex flex-col mt-14'>

                <a href='#Contact' className='fixed bottom-0 right-0 text-3xl z-50 bg-white p-3 rounded-full text-orange-500 arrow_hide arrow_top'><MdOutlineKeyboardArrowUp /></a>


                <div className='flex flex-row flex-wrap w-full justify-evenly items-center first_container'>
                    <div className='flex flex-col'>

                        <p className='flex flex-row capitalize font-medium text-lg text-orange-500 mb-5'>
                            say hello
                            <PiHandWavingFill className='text-orange-400 mt-1 ml-1' />
                        </p>

                        <h1 className='capitalize font-bold text-6xl'>
                            let's work<br />together
                        </h1>

                        <p className='first-letter:capitalize font-medium mt-5 contact_p'>contact me for any work or help.</p>

                    </div>

                    <img className='contactImg' src={darkmode ? contact_dark : contact_light} />

                </div>




                <form className='flex flex-col w-fit m-auto my-28' ref={form} onSubmit={sendEmail}>
                    <input id='name' onChange={checkData} className='py-2 px-2 rounded-lg mb-3 font-semibold' type='text' minLength={5} placeholder='Your Name' name='name' required />
                    <input id='email' onChange={checkData} className='py-2 px-2 rounded-lg mb-3 font-semibold' type='email' minLength={12} placeholder='Your Email' name='email' required />
                    <textarea id='message' onChange={checkData} required className='py-2 px-2 rounded-lg font-semibold' cols={32} rows={5} placeholder='Your Message' name='message'></textarea>
                    {
                        messageState == 1 ? <p className='flex flex-row m-auto mt-5 font-bold text-lg capitalize text-green-500'><IoMdDoneAll className='mt-1 mr-2 text-xl' />message sent</p> : null
                    }

                    {
                        messageState == 2 ? <p className='flex flex-row m-auto mt-5 font-bold text-lg capitalize text-red-500'><MdErrorOutline className='mt-1 mr-2 text-xl' />error</p> : null
                    }


                    {
                        messageState == 0 ? null : null
                    }

                    <button disabled id='btn' className='capitalize font-bold text-white bg-orange-500 w-fit m-auto mt-10 py-3 px-8 rounded-xl hover:scale-110 duration-500 disabled:bg-orange-300' type='submit'>submit</button>
                </form>


            </section >


            <Footer />

        </>
    )
}

export default Contact;