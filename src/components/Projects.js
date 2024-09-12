import '../css/projects.css'

import dots_light from '../imgs/dots-light.svg'
import dots_dark from '../imgs/dots-dark.svg'
import Webproject from './Webproject';


import burger from '../imgs/Burger.png'
import gym from '../imgs/Gym.png'
import spaceTravle from '../imgs/space.png'
import elecar from '../imgs/elecar.png'





import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';


import Fade from 'react-reveal/Fade';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce } from 'react-reveal';


function Projects(props) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Myprojects");
        window.scrollTo(0, 0);
    }


    return (
        <section className={props.darkmode ? 'projects_container flex flex-row w-full justify-evenly items-center' : 'projects_container projects_light flex flex-row w-full justify-evenly items-center'}>

            <Fade left duration={2000}>
                <div className='flex flex-col items-center m-auto'>

                    <h1 className='capitalize font-bold text-4xl flex flex-row m-auto'>
                        <img className='mr-3' src={props.darkmode ? dots_dark : dots_light} />
                        latest projects
                    </h1>

                    <p className='first-letter:capitalize'>enjoy watching some of my latest projects.</p>

                    <Link className='capitalize font-bold color link_big text-white my-5 py-4 px-8 text-xl rounded-lg allProjects_link duration-500' to='/Myprojects' onClick={handleClick}>all projects</Link>
                </div>
            </Fade>

            <Fade bottom duration={2000}>
                <Swiper
                    direction={'horizontal'}
                    slidesPerView={2}
                    spaceBetween={10}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Mousewheel]}
                    className="mySwiper small_screen"
                >
                    <SwiperSlide><Webproject projectName='burger' projectImg={burger} tool="react" PreviewLink='https://mahmoudnagdyy.github.io/Burger/' GithubLink='https://github.com/mahmoudnagdyy/Burger' /></SwiperSlide>
                    <SwiperSlide><Webproject projectName='gym' projectImg={gym} tool="react" PreviewLink='https://mahmoudnagdyy.github.io/Gym/' GithubLink='https://github.com/mahmoudnagdyy/Gym' /></SwiperSlide>
                    <SwiperSlide><Webproject projectName='space travle' projectImg={spaceTravle} tool="react" PreviewLink='https://mahmoudnagdyy.github.io/Space/' GithubLink='https://github.com/mahmoudnagdyy/Space' /></SwiperSlide>
                    <SwiperSlide><Webproject projectName='elecar' projectImg={elecar} tool="react" PreviewLink='https://mahmoudnagdyy.github.io/elecar/' GithubLink='https://github.com/mahmoudnagdyy/elecar' /></SwiperSlide>

                </Swiper>
            </Fade>



            <Fade bottom duration={2000}>
                <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper small_swiper"
                >
                    <SwiperSlide><Webproject projectName='burger' projectTrack='frontend developer' projectImg={burger} tool="react" PreviewLink='https://mahmoudnagdyy.github.io/Burger/' GithubLink='https://github.com/mahmoudnagdyy/Burger' /></SwiperSlide>
                    <SwiperSlide><Webproject projectName='gym' projectTrack='frontend developer' projectImg={gym} tool="react" PreviewLink='https://mahmoudnagdyy.github.io/Gym/' GithubLink='https://github.com/mahmoudnagdyy/Gym' /></SwiperSlide>
                    <SwiperSlide><Webproject projectName='space travle' projectTrack='frontend developer' projectImg={spaceTravle} tool="react" PreviewLink='https://mahmoudnagdyy.github.io/Space/' GithubLink='https://github.com/mahmoudnagdyy/Space' /></SwiperSlide>
                    <SwiperSlide><Webproject projectName='elecar' projectTrack='frontend developer' projectImg={elecar} tool="react" PreviewLink='https://mahmoudnagdyy.github.io/elecar/' GithubLink='https://github.com/mahmoudnagdyy/elecar' /></SwiperSlide>
                </Swiper>
            </Fade>


            {/* <Link className='capitalize font-bold color link_small text-white my-8 py-4 px-8 text-xl rounded-lg hover:scale-110 duration-500' to='/Myprojects' onClick={handleClick}>all projects</Link> */}

            <Fade bottom delay={500}>
                <button className='capitalize font-bold color link_small text-white my-8 py-4 px-8 text-xl rounded-lg hover:scale-110 duration-500' to='/Myprojects' onClick={handleClick}>all projects</button>
            </Fade>

        </ section >
    )
}

export default Projects;