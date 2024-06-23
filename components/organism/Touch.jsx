import React from 'react'
import "../../app/globals.css";
import Heading1 from '../atom/Heading';
import Btn from '../atom/Btn';


const Touch = () => {
    return (
        <div id='tuoch' className='shadow  flex flex-col text-center items-center gap-[20px] bg-gradient-to-r from-gray-900 via-white-900 to-gray-900 py-[50px] my-[70px] rounded-[20px] w-[98%] mx-[15px]' data-aos="zoom-out-down" data-aos-duration="2000">
            <Heading1 type='18' text='Get in Touch' />
            <Heading1 type='19' text='Belief Empowers Business' />
            <Heading1 type='20' text="At Genraor, we believe in the transformative power of technology to empower businesses and fuel their journey toward excellence. Let's collaborate to create a technology roadmap that aligns with your business objectives"/>
            <div className='flex justify-center items-center border-2 border-white bg-gradient-to-r from-gray-900 via-white-900 to-gray-900 mt-[10px] rounded-[5px] w-[200px] h-[50px] gap-[50px] hover:cursor-pointer '>
                <Btn type="2" text="LEARN MORE" />
                <svg className='w-[15px]' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>

        </div>
    );
};

export default Touch;




