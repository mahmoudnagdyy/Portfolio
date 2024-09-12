import '../css/header.css'
import { Link } from 'react-router-dom';

import logo from '../imgs/logo.png'

import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { PiListBold } from "react-icons/pi";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowUp } from "react-icons/md";


import { motion, useScroll } from "framer-motion";

import Footer from './Footer';
import Webproject from './Webproject';

import burger from '../imgs/Burger.png'
import gym from '../imgs/Gym.png'
import spaceTravle from '../imgs/space.png'
import elecar from '../imgs/elecar.png'
import fruit from '../imgs/fruit.png'
import tasty from '../imgs/tasty.png'
import stopwatch from '../imgs/stopwatch.png'
import Calculator_Js from '../imgs/Calculator_Js.png'
import XO from '../imgs/XO.png'
import todo from '../imgs/todo.png'
import todo_hooks from '../imgs/TODO_Hooks.png'


import dots_light from '../imgs/dots-light.svg'
import dots_dark from '../imgs/dots-dark.svg'



function Myprojects() {

    const [darkmode, setDarkMode] = useState(false);
    const [listState, setListState] = useState(false)


    const { scrollYProgress } = useScroll();

    const [activeButton, setActiveButton] = useState(1);


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

            <header id='Myprojects' className='flex flex-row justify-around items-center w-full h-24 duration-500'>

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

            {/* My Projects Section       >>>>>>>>>>>> */}

            <section className='flex flex-col w-full items-center justify-center'>


                <a href='#Myprojects' className='fixed bottom-0 right-0 text-3xl z-50 bg-white p-3 rounded-full text-orange-500 arrow_hide arrow_top'><MdOutlineKeyboardArrowUp /></a>

                <h1 className='flex flex-row m-auto capitalize font-bold text-4xl mt-8'>
                    <img className='mr-3' src={darkmode ? dots_dark : dots_light} />
                    all projects
                </h1>


                    <div className='flex flex-row flex-wrap w-full justify-evenly my-20'>
                        <Webproject projectName='burger' projectImg={burger} tool="react" PreviewLink='https://mahmoudnagdyy.github.io/Burger/' GithubLink='https://github.com/mahmoudnagdyy/Burger' />
                        <Webproject projectName='gym' projectImg={gym} tool="react" PreviewLink='https://mahmoudnagdyy.github.io/Gym/' GithubLink='https://github.com/mahmoudnagdyy/Gym' />
                        <Webproject projectName='space travle' projectImg={spaceTravle} tool="React" PreviewLink='https://mahmoudnagdyy.github.io/Space/' GithubLink='https://github.com/mahmoudnagdyy/Space' />
                        <Webproject projectName='elecar' projectImg={elecar} tool="react" PreviewLink='https://mahmoudnagdyy.github.io/elecar/' GithubLink='https://github.com/mahmoudnagdyy/elecar' />
                        <Webproject projectName='fruit' projectImg={fruit} tool="react" PreviewLink='https://mahmoudnagdyy.github.io/Fruit/' GithubLink='https://github.com/mahmoudnagdyy/Fruit' />
                        <Webproject projectName='tasty' projectImg={tasty} tool="react" PreviewLink='https://mahmoudnagdyy.github.io/Tasty/' GithubLink='https://github.com/mahmoudnagdyy/Tasty' />
                        <Webproject projectName='stop watch' projectImg={stopwatch} tool="jQuery" PreviewLink='https://mahmoudnagdyy.github.io/Stop_Watch/' GithubLink='https://github.com/mahmoudnagdyy/Stop_Watch' />
                        <Webproject projectName='calculator' projectImg={Calculator_Js} tool="jQuery" PreviewLink='https://mahmoudnagdyy.github.io/Calculator/' GithubLink='https://github.com/mahmoudnagdyy/Calculator' />
                        <Webproject projectName='xO' projectImg={XO} tool="jQuery" PreviewLink='https://mahmoudnagdyy.github.io/XO/' GithubLink='https://github.com/mahmoudnagdyy/XO' />
                        <Webproject projectName='to do list' projectImg={todo} tool="jQuery" PreviewLink='https://mahmoudnagdyy.github.io/TODO_List/' GithubLink='https://github.com/mahmoudnagdyy/TODO_List' />
                        <Webproject projectName='to do list' projectImg={todo_hooks} tool="react(hooks)" PreviewLink='https://mahmoudnagdyy.github.io/TODO_Hooks/' GithubLink='https://github.com/mahmoudnagdyy/TODO_Hooks' />
                    </div >
                

            </section >






            <Footer />

        </>
    )
}

export default Myprojects;