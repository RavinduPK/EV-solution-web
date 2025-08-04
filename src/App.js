import React, { useState, useEffect } from 'react';
import { Background } from './Components/Background/Background.js';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Hero } from './Components/Hero/Hero.jsx';
import './index.css';

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "indulge", text2: "your passion" },
    { text1: "Give in to", text2: "Your Passion" }
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count==2?0:count+1})
    }, 2000);
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero 
      setPlayStatus ={setPlayStatus}
      heroData = {heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  );
};

export default App;
