import '../css/header.css'
import { Link } from 'react-router-dom';

import logo from '../imgs/logo.png'

import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { PiListBold } from "react-icons/pi";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from 'react';


import { motion, useScroll } from "framer-motion";
import Home from './Home';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Prepared from './Prepared';
import Footer from './Footer';


function Homepage() {

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



    return (
        <div className="App">

            <header className='flex flex-row justify-around items-center w-full h-24 duration-500'>

                <motion.div
                    className="progress-bar z-50"
                    style={{ scaleX: scrollYProgress, }}

                />

                <img className='logo' src={logo} />


                <div className='flex flex-row header_links'>

                    <Link className='capitalize font-bold text-lg mr-10 relative link_hover' to='/'>home</Link>
                    <Link className='capitalize font-bold text-lg mr-10 relative link_hover hover:text-orange-500' to='/Myprojects'>my projects</Link>
                    <Link className='capitalize font-bold text-lg mr-10 relative link_hover hover:text-orange-500' to='/Contact'>contact</Link>

                    <button onClick={ActiveMode} className={darkmode ? 'text-3xl text-white hover:scale-125 duration-500' : 'text-3xl text-orange-500 hover:scale-125 duration-500'}>
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

            <Home darkmode={darkmode} />
            <About darkmode={darkmode} />
            <Services darkmode={darkmode} />
            <Projects darkmode={darkmode} />
            <Prepared darkmode={darkmode} />
            <Footer />

        </div >
    );
}

export default Homepage;
