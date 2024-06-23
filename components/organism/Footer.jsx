import React from 'react'
import Heading1 from '../atom/Heading';
import "../../app/globals.css";
import AnchorTag from '../atom/AnchorTag';
import Inputs from '../atom/Inputs';
import Btn from '../atom/Btn';


const Footer = () => {
    return (
        <div className='bg-[#f7f9ff] border-t-2 border-[#d1d8dd]  w-[100%] 2xl:flex  2xl:flex-nowrap xl:flex xl:flex-nowrap lg:flex lg:flex-nowrap md:flex md:flex-wrap sm:flex sm:flex-wrap flex flex-wrap '>
            <div className="  gap-[5px] border-[#d1d8dd]  py-[50px] 2xl:w-[30%] 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center 2xl:px-[100px] 2xl:border-r-2 2xl:border-[#d1d8dd] xl:w-[30%] xl:flex xl:flex-col xl:items-center xl:justify-center xl:px-[100px] xl:border-r-2 xl:border-[#d1d8dd] lg:w-[50%] lg:flex lg:flex-col lg:items-center lg:justify-center lg:border-r-2 lg:border-[#d1d8dd] md:px-[10px]  md:w-[100%] md:flex md:flex-col md:pr-[500px] md:justify-start sm:w-[100%] sm:pr-[300px] sm:flex sm:flex-col sm:justify-start sm:px-[10px] w-[100%] flex flex-col justify-start px-[10px] pr-[300px] ">
                <img className='w-[25%] mb-[10px]' src="/assits/Images/logo.png" alt="" />
                <Heading1 type='21' text='We offer tailored IT services to maximize growth, efficiency, data protection, and business continuity to guide you through the ever-evolving technology landscape. Collaborate with us for excellence.' />
            </div>
            <div className=" flex flex-col w-[100%] pt-[50px] ">
                <div className="right w-[100%] pb-[50px] pr-[100px] 2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col flex flex-col">
                    <div className=" flex 2xl:order-1 xl:order-1 lg:order-1 md:order-2 sm:order-2 order-2 w-[50%] ">
                        <div className="1 flex flex-col justify-center gap-[10px] 2xl:pl-[70px] xl:pl-[70px] lg:pl-[20px] sm:pl-[10px] pl-[10px] ">
                            <Heading1 type='21' text='CONTACT US' />
                            <Heading1 type='22' text='Dubai, UAE' />
                            <Heading1 type='22' text='support@genroargroup.com' />
                        </div>
                        <div className="2 flex flex-col justify-center gap-[10px] pl-[70px] 2xl:pt-[0px] xl:pt-[0px] lg:pt-[0px] md:pt-[60px] sm:pt-[60px] pt-[90px]">
                            <Heading1 type='21' text='QUICK LINKS' />
                            <Heading1 type='22' text='Home' href='#' />
                            <Heading1 type='22' text='Solution' href='#solution' />
                            <Heading1 type='22' text='About' href='#about' />
                            <Heading1 type='22' text='Services' href='#services' />
                            <Heading1 type='22' text='Portfolio.................' href='#portfolio' />


                        </div>
                    </div>
                    <div className="3 flex flex-col justify-center gap-[10px]  2xl:order-2 xl:order-2 lg:order-2 md:order-3 sm:order-3 order-3 2xl:pl-[70px] xl:pl-[70px] lg:pl-[20px] sm:pl-[10px] pl-[10px]">
                        <Heading1 type='21' text='ABOUT US' />
                        <Heading1 type='22' text='Company' />
                        <Heading1 type='22' text='Privacy Policy' />
                        <Heading1 type='22' text='Terms & Conditions' />

                    </div>

                    <div className="4  flex flex-col justify-center gap-[10px]  2xl:order-3 2xl:border-none 2xl:w-[25%] 2xl:pl-[70px] xl:order-3 xl:border-none xl:pl-[70px] lg:order-3 lg:border-none lg:pl-[70px] md:order-1 md:border-b-2 md:border-[#d1d8dd] md:pl-[20px] md:pb-[50px] md:w-[100%] sm:order-1 sm:w-[100%] sm:pl-[10px] sm:border-b-2 sm:border-[#d1d8dd] sm:pb-[50px] order-1 w-[100%] pl-[10px] border-b-2 border-[#d1d8dd] pb-[50px]">
                        <Heading1 type='21' text='SUBSCRIBE VIA EMAIL' />
                        <Heading1 type='22' text='Subscribe to our newsletter ' />
                        <div className=" flex w-[100%]">
                            <Inputs type="email" placeholder='Email@.com' className='py-[11px] pl-[5px] mt-[10px] border-2 border-[#d1d8dd] 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[600px] sm:w-[500px] w-[500px] ' />
                            <div className='flex justify-center items-center bg-gradient-to-r from-gray-900 via-white-900 to-gray-900 mt-[10px] ml-[-60px] rounded-[2px]  h-[50px] 2xl:w-[100px] 2xl:px-[0px] xl:w-[100px] xl:px-[0px] lg:w-[100px] lg:px-[0px] md:w-[400px] md:px-[100px] sm:w-[400px] sm:px-[20px] w-[400px] px-[0px] hover:cursor-pointer '>
                                <Btn type="2" text="Subscribe" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copy border-t-2 border-[#d1d8dd] pl-[100px] pt-[30px] w-[100%]">
                    <Heading1 type='22' text='Copyright © 2023-2024: All Rights Reserved. Designed by GENROAR IT Solutions Group ' />

                </div>
            </div>
        </div>
    );
};

export default Footer;