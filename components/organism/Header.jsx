import { React, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from '../atom/Image';
import "../../app/globals.css";
import AnchorTag from '../atom/AnchorTag';
import Btn from '../atom/btn';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className='capitalize px-[70px] border-b-2 border-[#99] flex justify-between fixed w-[100%] bg-white z-[1000]' data-aos="fade-down">
            <div className="out flex flex-col items-center justify-center">
                <a href="#home"><Image className="xl:w-[10%] xl:my-[10px] lg:w-[10%] lg:my-[10px] md:w-[10%] md:my-[10px] sm:w-[10%] sm:my-[10px] w-[14%] my-[10px]" path="/assits/Images/logo.png" alt="image" text="" /></a>
            </div>
            <div className=" flex gap-[20px]">
                <div className="tag">
                    <ul className='xl:flex xl:flex-nowrap xl:items-center xl:justify-center xl:gap-[50px] lg:flex lg:items-center lg:justify-center lg:gap-[50px] md:hidden sm:hidden xl:gap-[50px] hidden'>
                        <div className="border-t-4 border-black"><AnchorTag href="#" text="Home"/></div>
                        <AnchorTag href="#solution" text="solution" />
                        <AnchorTag href="#about" text="About"  />
                        <AnchorTag href="#services" text="services"  />
                        <AnchorTag href="#portfolio" text="portfolio" />
                    </ul>
                </div>
                <div className='hover:cursor-pointer xl:flex xl:justify-center xl:items-center lg:flex lg:justify-center lg:items-center bg-gradient-to-r from-gray-900 via-white-900 to-gray-900 mt-[10px] rounded-[5px] w-[130px] h-[50px] xl:block xl:items-center lg:block lg:items-center md:hidden hidden'>
                    <Btn type="2" text="CONTACT" href='#tuoch' />
                </div>
            </div>
            <div className="shadow  w-[30%] h-[100vh] absolute bg-white top-0 z-[1000]" style={{left: sidebarOpen ? '0' : '-30%', transition: 'left 0.5s ease-in-out' }}>
            <button className="menuBtn absolute top-[20px] right-[10px] xl:hidden lg:hidden md:block sm:block block" onClick={toggleSidebar}>
                <svg className='w-[30px] h-[30px] hover:rotate-[180deg] duration-[1s]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>              
                </button>
                <Image className="w-[10%] absolute top-[2%] left-[11%] " path="/assits/Images/logo.png" alt="image" text="" />

                <div className="tag mt-[20px] pl-[10%]  border-t-2 border-black">
                    <ul className='flex flex-col gap-[10px]'>
                        <AnchorTag href="#home" text="Home"/>
                        <AnchorTag href="#solution" text="solution" />
                        <AnchorTag href="#about" text="About"  />
                        <AnchorTag href="#services" text="services"  />
                        <AnchorTag href="#portfolio" text="portfolio" />
                    </ul>
                </div>
                <div className='flex justify-center items-center  bg-gradient-to-r from-gray-900 via-white-900 to-gray-900 ml-[10%] mt-[30px] rounded-[10px] w-[80%] h-[50px] '>
                    <Btn type="1" text="CONTACT" href='#tuoch' />
                </div>
            </div>
            <button className="menuBtn absolute top-[20px] right-[10px] xl:hidden lg:hidden md:block sm:block block  " onClick={toggleSidebar}>
                <div className="flex items-center justify-center bg-[#f5f5f5] rounded-[5px] w-[33px] h-[33px] hover:shadow-md " > 
                <svg className='w-[20px] h-[30px]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </div>
                </button>
        </div>
    );
};

export default Header;
