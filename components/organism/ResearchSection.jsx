import React from 'react'
import Heading1 from '../atom/Heading'
import Btn from '../atom/Btn'

const ResearchSection = () => {
    return (
        <div className='w-[100%] px-[70px] 2xl:flex 2xl:flex-nowrap 2xl:justify-between 2xl:px-[70px] xl:flex xl:flex-nowrap xl:justify-between xl:px-[70px] lg:flex lg:flex-nowrap lg:justify-between lg:px-[70px] md:flex md:flex-wrap-reverse md:justify-between md:px-[50px] sm:flex sm:flex-wrap-reverse sm:justify-start sm:px-[20px] flex flex-wrap-reverse justify-between px-[100px]  '>
            <div className="flex flex-col gap-[10px] 2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[50%] sm:ml-[20px] sm:w-[100%] ml-[20px] w-[100%] ">
                <div className=" tracking-[1px] border-b-4 border-[#999] w-[18%]" data-aos="zoom-in" data-aos-delay="900"><Heading1 type='16' text='Real Research ' />
                </div>
                <div className="py-[10px]" data-aos="fade-up" data-aos-delay="900">  <Heading1 type='10' text='Making Every Opinion Count  ' />
                </div>
                <div className="py-[10px]" data-aos="fade-up" data-aos-delay="950" ><Heading1 type='5' text="We've empowered the blockchain-based research platform by assisting in the development of its website and supporting its global survey operations." />
                </div>
                <div className='flex items-center ' data-aos="fade-up" data-aos-delay="1000"><span className='h-[8px] w-[7px] bg-[#434e58] mr-[5px] rounded-[100%]'></span><Heading1 type='2' text='Conceptualized and developed a secure and user-friendly mobile application' /></div>
                <div className='flex items-center ' data-aos="fade-up" data-aos-delay="1000"> <span className='h-[8px] w-[7px] bg-[#434e58] mr-[5px] rounded-[100%]'></span><Heading1 type='2' text='Streamlined global survey operations with an intuitive and engaging interface' /></div>
                <div className='flex items-center ' data-aos="fade-up" data-aos-delay="1000"><span className='h-[8px] w-[7px] bg-[#434e58] mr-[5px] rounded-[100%]'></span><Heading1 type='2' text='Integrated IT application to yield insights and incentivize participants' /></div>
                <div className='flex items-center ' data-aos="fade-up" data-aos-delay="1000"><span className='h-[8px] w-[7px] bg-[#434e58] mr-[5px] rounded-[100%]'></span><Heading1 type='2' text='Enhanced app architecture for global accessibility and increased participation' /></div>
                <div className='flex justify-center items-center bg-gradient-to-r from-gray-900 via-white-900 to-gray-900 mt-[10px] rounded-[5px] w-[180px] h-[50px] gap-[10px] hover:cursor-pointer ' data-aos="fade-up" data-aos-delay="1200">
                    <Btn type="2" text="VISIT WEBSITE" />
                    <svg className='w-[15px]' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </div>
            </div>
            <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[60%] sm:w-[100%] ml-[20px] w-[100%]" data-aos="fade-left" data-aos-duration="2000">
                <img src="/assits/Images/real-research.png" alt="" />
            </div>
        </div>
    )
}

export default ResearchSection
