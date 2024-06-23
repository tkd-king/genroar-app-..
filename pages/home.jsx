import React from "react";
import Banner from "@/components/organism/Bnner";
import CoinSecion from "@/components/organism/CoinSecion";
import Footer from "@/components/organism/Footer";
import GroupSection from "@/components/organism/GroupSection";
import Header from "@/components/organism/Header";
import PlasticHero from "@/components/organism/PlasticHero";
import ResearchSection from "@/components/organism/ResearchSection";
import SlideSection from "@/components/organism/SlideSection";
import Touch from "@/components/organism/Touch";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div>
      <Header />
      <div id="home">
      <Banner />
      </div>
      <div id="solution">
      <SlideSection />
      </div>
      <div id="about">
        <GroupSection />
      </div>
      <PlasticHero />
      <CoinSecion />
      <ResearchSection />
      
      <Touch />
      
      <Footer />
    </div>
  );
};

export default Home;
