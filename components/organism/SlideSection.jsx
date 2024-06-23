import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Heading1 from '../atom/Heading';
import Image from '../atom/Image';
import MySwiper from '../atom/MySwiper';

const SlideSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  return (
    <div className='my-[100px] px-[70px] overflow-hidden w-[100%] '>
      <div className="xl:flex xl:flex-nowrap xl:gap-[10px] lg:flex lg:flex-nowrap lg:gap-[10px] md:flex-wrap-reverse md:flex md:gap-[10px] sm:flex sm:flex-wrap-reverse ms:gap-[10px] flex flex-wrap-reverse gap-[10px]  relative">
        <div className="bg-gradiunt-r from-green to-white " data-aos="fade-right" >
          <Image className="rounded-[10px] z-[-1000]" path="/assits/Images/sidebanr.jpg" alt="image" text="" />
        </div>
        <div className="flex gap-[50px] py-[50px]">
          <span className='w-[50%]' data-aos="fade-up" data-aos-duration="1600"><Heading1 type="11" text="Elevating Genroar to New Heights" /></span>
          <span className='w-[27%]' data-aos="fade-up" data-aos-duration="1600"><Heading1 type="13" text="With our customized IT solutions, you can expect:" /></span>

        </div>
      </div>
      <div className="z-[1000] flex mt-[-300px] ml-[150px] xl:verflow-hidden  lg:verflow-hidden md:verflow-hidden sm:verflow-hidden :verflow-hidden " data-aos="fade-left" data-aos-duration="2000">
          <MySwiper/>
        </div>
    </div>
  );
};

export default SlideSection;