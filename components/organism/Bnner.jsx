import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Btn from "../atom/Btn";
import Heading1 from "../atom/Heading";
import "../../pages/style.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div className="px-[70px] 2xl:w-[100%] 2xl:pb-[100px] 2xl:bg-[#F4F9FE] xl:w-[100%] xl:pb-[100px] xl:bg-[#F4F9FE] lg:w-[100%] lg:pb-[100px] lg:bg-[#F4F9FE] md:w-[100%] md:pb-[100px] md:bg-[#F4F9FE] sm:w-[100%] sm:pb-[100px] sm:bg-[#F4F9FE] w-[100%] pb-[100px] bg-[#F4F9FE]">
      <div className="out  pt-[80px] flex xl:flex-nowrap md:flex:wrap-reverse lg:flex-nowrap sm:flex-wrap-reverse flex-wrap-reverse  items-center justify-center mx-[50px] gap-[20px]">
        <div className="inner xl:pt-[150px] lg:pt-[100px] md:pt-[80px] sm:pt-[50px] pt-[40px] xl:W-[50%] lg:W-[30%] md:W-[100%] sm:W-[100%] W-[100%]">
          <div className="in " data-aos="fade-up" data-aos-delay="1200">
            <Heading1
              type="3"
              text="Cultivate Excellence With Customized IT Solutions"
            ></Heading1>
          </div>
          <div
            class="title py-[10px] 2xl:w-[40%] xl:W-[40%] lg:W-[40%] md:W-[100%] sm:W-[100%] W-[100%]"
            data-aos="fade-up"
            data-aos-delay="1300"
          >
            <Heading1
              type="11"
              text="TO PROPEL GENROAR TO NEW HEIGHTS"
            ></Heading1>
          </div>
          <div
            className="py-[10px] 2xl:w-[65%] xl:w-[65%] lg:w-[65%] md:w-[100%] sm:w-[100%] w-[100%]"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <Heading1
              type="4"
              text="Genroar is catalyzing transformation through the seamless integration of leading-edge technology and data-driven decision-making, driving innovation at the core of every operation."
            />
          </div>
          <div
            className="flex justify-center items-center bg-gradient-to-r from-gray-900 via-white-900 to-gray-900 mt-[10px] rounded-[5px] w-[150px] h-[50px] gap-[10px] hover:cursor-pointer "
            data-aos="fade-up"
            data-aos-delay="1500"
          >
            <Btn type="2" text="READ MORE" href='#services' />
            <svg
              className="w-[15px]"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </div>
        </div>
        <div
          className="animated-box xl:w-[50%] lg:w-[50%] md:w-[40%] sm:w-[40%]"
          data-aos="fade-up"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
        >
          <img
            className="W-[100%]"
            src="/assits/Images/logo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
