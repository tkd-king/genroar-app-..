import React from 'react'
import Heading1 from '../atom/Heading';
import Btn from '../atom/Btn';
import "../../app/globals.css";


const PlasticHero = () => {
    return (
        <div className='w-[100%] relative 2xl:flex 2xl:flex-nowrap 2xl:items-center 2xl:justify-between 2xl:px-[70px] 2xl:my-[100px] xl:flex xl:flex-nowrap xl:items-center xl:justify-between xl:px-[70px] xl:my-[100px] lg:flex lg:flex-nowrap lg:items-center lg:justify-between lg:px-[70px] lg:my-[100px] md:flex md:flex-wrap-reverse md:items-center md:justify-between md:px-[50px] md:my-[100px] sm:flex sm:flex-wrap-reverse sm:items-center sm:px-[0px] sm:my-[30px] flex flex-wrap-reverse items-center px-[10px] my-[30px]'>
            <div className="flex flex-col gap-[10px] 2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[50%] sm:ml-[20px] sm:w-[100%] ml-[20px] w-[100%]">
                <div className=" tracking-[4px] border-b-4 border-[#999] w-[18%]" data-aos="zoom-in" data-aos-delay="900"><Heading1 type='16' text='Plastichero' />
                </div>
                <div className="py-[10px]" data-aos="fade-up" data-aos-delay="900">  <Heading1 type='10' text='Walking Towards Sustainability' />
                </div>
                <div className="py-[10px]" data-aos="fade-up" data-aos-delay="950" ><Heading1 type='5' text='To make the world a greener place for future generations, we’ve lent our support to Plastichero in building their platform and streamlining their services. ' />
                </div>
                <div className='flex items-center ' data-aos="fade-up" data-aos-delay="1000"><span className='h-[8px] w-[7px] bg-[#434e58] mr-[5px] rounded-[100%]'></span><Heading1 type='2' text='Developing an eco-friendly platform integrating AI and analytics' /></div>
                <div className='flex items-center ' data-aos="fade-up" data-aos-delay="1000"> <span className='h-[8px] w-[7px] bg-[#434e58] mr-[5px] rounded-[100%]'></span><Heading1 type='2' text='Optimized resource management and enhanced sustainability efforts' /></div>
                <div className='flex items-center ' data-aos="fade-up" data-aos-delay="1000"><span className='h-[8px] w-[7px] bg-[#434e58] mr-[5px] rounded-[100%]'></span><Heading1 type='2' text='Enhanced supply chain efficiency through digital transformation' /></div>
                <div className='flex items-center ' data-aos="fade-up" data-aos-delay="1000"><span className='h-[8px] w-[7px] bg-[#434e58] mr-[5px] rounded-[100%]'></span><Heading1 type='2' text='Provided consumers with tools for informed, sustainable choices' /></div>
                <div className='flex justify-center items-center bg-gradient-to-r from-gray-900 via-white-900 to-gray-900 mt-[10px] rounded-[5px] w-[180px] h-[50px] gap-[10px] hover:cursor-pointer ' data-aos="fade-up" data-aos-delay="1200">
                    <Btn type="2" text="READ MORE" />
                    <svg className='w-[15px]' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </div>
            </div>

            <div className="w-[100%] sm:ml-[30px] ml-[30px]" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1400" >
                <img className='xl:w-[100%] xl:items-center xl:justify-center  lg:w-[100%]  lg:items-center lg:justify-center  md:items-center md:justify-center md:w-[70%] sm:w-[90%] sm:cover-full sm:items-center sm:pl-[50px] sm:mt-[] sm:justify-center  items-center justify-center w-[100%]' src="/assits/Images/plastichero.png" alt="" />
            </div>

            <div class="shadow text-here flex gap-[10px] bg-white absolute rounded-[20px] px-[10px] pb-[5px] 2xl:top-[10%] 2xl:left-[50%] xl:top-[10%] xl:left-[50%] lg:top-[10%] lg:left-[50%] md:top-[10%] md:left-[10%] sm:top-[5%] sm:left-[10%] top-[5%] left-[10%]" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
                <img src="/assits/Images/eco.svg" alt="" />

                <div className=" flex flex-col">
                    <Heading1 type='17' text='Eco-consciousness' />
                    <Heading1 type='1' text='To Drive Change' />
                </div>
                <img src="/assits/Images/eco2.svg" alt="" />

            </div>
            <div className="shadow absolute  p-[20px] rounded-[20px]  bg-[#ffffff]  2xl:bottom-[10%] 2xl:right-[10%] 2xl:w-[20%]  xl:bottom-[10%] xl:right-[10%] xl:w-[20%] lg:bottom-[10%] lg:right-[10%] lg:w-[20%] md:bottom-[55%] md:right-[20%] md:w-[30%] sm:bottom-[45%] sm:right-[10%] sm:w-[37%]  bottom-[45%] right-[10%] w-[37%]" data-aos="fade-left" data-aos-duration="1000">
                <div className="flex gap-[10px]">
                    <div className=" bg-[#ed6d59] py-[5px] flex items-center justify-center px-[10px] rounded-[10px]">
                        <img src="/assits/Images/20.svg" alt="" /></div>
                    <div className=" felx-col">
                        <Heading1 type='17' text='Recycle' />
                        <Heading1 type='1' text='Plastic Waste' />
                    </div>
                </div>
                <div className="flex py-[30px] gap-[10px]">
                    <div className=" bg-[#f4a95a] py-[5px] flex items-center justify-center px-[10px] rounded-[10px]">
                        <img src="/assits/Images/21.svg" alt="" /></div>
                    <div className=" felx-col">
                        <Heading1 type='17' text='Reuse' />
                        <Heading1 type='1' text='For Sustainable Products' />
                    </div>
                </div>
                <div className="flex gap-[10px]">
                    <div className=" bg-[#4e927c] py-[5px] flex items-center justify-center px-[10px] rounded-[10px]">
                        <img src="/assits/Images/22.svg" alt="" /></div>
                    <div className=" felx-col">
                        <Heading1 type='17' text='Revive' />
                        <Heading1 type='1' text='To Rejuvenate the Planet' />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PlasticHero;

