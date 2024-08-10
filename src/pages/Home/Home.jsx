import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} className='banner-img' alt="Hero Banner" />
        <div className="hero-caption">
          <img src={hero_title} className='caption-img' alt="Hero Title" />
          <p>
            Discover the epic journey of Hakan, an ordinary young man whose world 
            is turned upside down when he learns he’s connected to a secret, 
            ancient order, tasked with protecting Istanbul from an immortal enemy.
          </p> 
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"popular"}/>
        <TitleCards title={"Continue watching"} category={"now_playing"}/>
        <TitleCards title={"Today's Top Picks for You"} category={"top_rated"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
