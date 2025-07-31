// // // src/components/Home.tsx
// import React ,{useState, useEffect}from "react";
// import { motion } from "framer-motion";
// import homeImage from "../Assets/homeImage.jpg"; // ✅ correct import path and case-sensitive
// import Board from "./Board";
// import Navbar from "./Navbar";
// import AmazonLogo from '../Assets/Amazon.png';
// import GoogleLogo from '../Assets/Google.png';
// import VirginLogo from '../Assets/VirginsportLogo.png';
// import KuoniLogo from '../Assets/kuoni.png';
// import NHSLogo from '../Assets/NHSLogo.png';
// import BritishTriathlonLogo from '../Assets/BritishTrialthlon.png';
// import TreehouseLogo from '../Assets/TreeHouse.png';
// import homeImages from '../Assets/homeImage.jpg';
// import homeSlide1 from '../Assets/Homeimg1.jpg';
// import homeSlide2 from '../Assets/Homeimg2.jpg';
// import homeSlide3 from '../Assets/Homeimg3.jpg';
// import homeSlide4 from '../Assets/Homeimg4.jpg';
// import './Home.css';
// import Meal from '../Assets/Meal.jpg';
// import Meal1 from '../Assets/Meal1.jpg';
// import Meal2 from '../Assets/Meal2.jpg';


// const logos = [
//   { name: 'VirginsportLogo', src: VirginLogo },
//   { name: 'Amazon', src: AmazonLogo },
//   { name: 'Google', src: GoogleLogo },
//   { name: 'kuoni', src: KuoniLogo },
//   { name: 'NHSLogo', src: NHSLogo },
//   { name: 'BritishTrialthlon ', src: BritishTriathlonLogo },

// ];

// const logoss= [
//   { name: 'homeImg ', src: homeImages },
//   { name: 'homeimg1 ', src: homeSlide1 },
//   { name: 'homeimg2 ', src: homeSlide2 },
//   { name: 'homeimg3 ', src: homeSlide3 },
//   { name: 'homeimg4 ', src: homeSlide4 },

// ];

// const cartImages=[

//   {name:'Meals', src: Meal},
//   {name:'Meals1', src: Meal1},
//   {name:'Meals2', src: Meal2},  

// ]

// const Home: React.FC = () => {

//   const[imgs, setImgs] = useState(0);


// useEffect(() => {
// const interval = setInterval(() =>{
//   setImgs(prev => (prev + 1) % logoss.length) }, 3000);
//   return () => clearInterval(interval);
// }, []);



//   return (
//     <div className="menu-container">
//     <Navbar/>
//     {/* <Cart /> */}
//     <section className="hero-container">

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }} className="hero-wrapper"  >
      
//         <div className = "imgs-snacks">
//         <img className="pic-display"
//           src={logoss[imgs].src}
//           alt="Snack display" />
          
//         </div>
//         {/* <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link> */}
//         <div className ="text-on-overlay">
//         <h1 className="title">The London Lunchbox company </h1>
//         <p className="desc">
//         Customize your holiday food
//         </p>
//           </div>
          
//       </motion.div>
//       </section>
//       {/* <section className="customers-section"> */}
//       <Board logos={logos} />
//       {/* </section> */}
//       <div className="cart-container" >
//         <div className="cart-images-wrapper">
//         {/* <section> */}
//         <div className="cart-container" >
//         <div className="cart-images-wrapper">
//                  {cartImages.map((item , index) => (
//               <img key ={index} className= "Img-Cart" 
//                src = {item.src}
//               alt={item.name}   /> 
//   ))}
//   </div>
//   </div>
//   );
// };
// export default Home;

// src/components/Home.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Board from "./Board";
import Navbar from "./Navbar";
import AmazonLogo from '../Assets/Amazon.png';
import GoogleLogo from '../Assets/Google.png';
import VirginLogo from '../Assets/VirginsportLogo.png';
import KuoniLogo from '../Assets/kuoni.png';
import NHSLogo from '../Assets/NHSLogo.png';
import BritishTriathlonLogo from '../Assets/BritishTrialthlon.png';
import homeImage from '../Assets/homeImage.jpg';
import homeSlide1 from '../Assets/Homeimg1.jpg';
import homeSlide2 from '../Assets/Homeimg2.jpg';
import homeSlide3 from '../Assets/Homeimg3.jpg';
import homeSlide4 from '../Assets/Homeimg4.jpg';
import './Home.css';
import Meal from '../Assets/Meal.jpg';
import Meal1 from '../Assets/Meal1.jpg';
import Meal2 from '../Assets/Meal2.jpg';
import CardReu from './Reuse';

const logos = [
  { name: 'VirginsportLogo', src: VirginLogo },
  { name: 'Amazon', src: AmazonLogo },
  { name: 'Google', src: GoogleLogo },
  { name: 'Kuoni', src: KuoniLogo },
  { name: 'NHSLogo', src: NHSLogo },
  { name: 'BritishTriathlon', src: BritishTriathlonLogo }
];

const logoss = [
  { name: 'homeImage', src: homeImage },
  { name: 'homeSlide1', src: homeSlide1 },
  { name: 'homeSlide2', src: homeSlide2 },
  { name: 'homeSlide3', src: homeSlide3 },
  { name: 'homeSlide4', src: homeSlide4 }
];

const cartImages = [
  { name: 'Meal', src: Meal },
  { name: 'Meal1', src: Meal1 },
  { name: 'Meal2', src: Meal2 }
];

const Home: React.FC = () => {
  const [imgs, setImgs] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgs((prev) => (prev + 1) % logoss.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="menu-container">
      <Navbar />

      <section className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-wrapper"
        >
          <div className="imgs-snacks">
            <img className="pic-display" src={logoss[imgs].src} alt="Snack display" />
            {cartImages.map((item, index) => (
            <img key={index} className="Img-Cart" src={item.src} alt={item.name} />
          ))}
          </div>

          <div className="text-on-overlay">
            <h1 className="title">The London Lunchbox Company</h1>
            <p className="desc">Customize your holiday food</p>
          </div>
        </motion.div>
      </section>

      <Board logos={logos} />

      {/* <div className="cart-container">
        <div className="cart-images-wrapper">
          {cartImages.map((item, index) => (
            <img key={index} className="Img-Cart" src={item.src} alt={item.name} />
          ))}
        </div>
      </div> */}
      <div className="cart-grid">
  <CardReu  
      name = " Meal A"


      ratings ={4}/>
  <CardReu  
      name = " Meal B"


      ratings ={4} />
  <CardReu 
       name = " Meal C"



      ratings ={4}/>
  <CardReu 
      name = " Meal D"


      ratings ={4} />
</div>
    </div>
  );
};

export default Home;



{/* // src/components/Home.tsx
// src/components/Home.tsx
// src/components/Home.tsx
// import React, { useEffect, useRef, useState } from 'react';
// import Navbar from './Navbar';
// import Board from './Board';
// import AmazonLogo from '../Assets/Amazon.png';
// import GoogleLogo from '../Assets/Google.png';
// import VirginLogo from '../Assets/VirginsportLogo.png';
// import KuoniLogo from '../Assets/kuoni.png';
// import NHSLogo from '../Assets/NHSLogo.png';
// import BritishTriathlonLogo from '../Assets/BritishTrialthlon.png';
// import homeSlide1 from '../Assets/Homeimg1.jpg';
// import homeSlide2 from '../Assets/Homeimg2.jpg';
// import homeSlide3 from '../Assets/Homeimg3.jpg';
// import homeSlide4 from '../Assets/Homeimg4.jpg';
// import './Home.css'; */}

{/* // const slides = [ */}
//   {
//     id: 1,
//     image: homeSlide1,
//     title: 'Everything broken can be repaired',
//     subtitle: 'See how',
//   },
//   {
//     id: 2,
//     image: homeSlide2,
//     title: 'See through the field',
//     subtitle: 'Learn more about',
//   },
//   {
//     id: 3,
//     image: homeSlide3,
//     title: 'Hey, take a time to relax!',
//     subtitle: 'Everybody needs',
//   },
//   {
//     id: 4,
//     image: homeSlide4,
//     title: 'Enjoy seasonal freshness',
//     subtitle: 'Explore menu',
//   },
// ];

// const logos = [
//   { name: 'VirginsportLogo', src: VirginLogo },
//   { name: 'Amazon', src: AmazonLogo },
//   { name: 'Google', src: GoogleLogo },
//   { name: 'kuoni', src: KuoniLogo },
//   { name: 'NHSLogo', src: NHSLogo },
//   { name: 'BritishTrialthlon', src: BritishTriathlonLogo },
// ];

// const Home: React.FC = () => {
//   const [current, setCurrent] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//   const animationDuration = 1200;
//   const autoplayDuration = 5000;

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrent((prev) => (prev + 1) % slides.length);
//     setTimeout(() => setIsAnimating(false), animationDuration);
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//     setTimeout(() => setIsAnimating(false), animationDuration);
//   };

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       nextSlide();
//     }, autoplayDuration);
//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, []);

//   return (
//     <div className="menu-container">
//       <Navbar />
//       <section className="slideshow" id="js-header">
//         {slides.map((slide, index) => {
//           const isCurrent = index === current;
//           const isNext = index === (current + 1) % slides.length;
//           const isPrev = index === (current - 1 + slides.length) % slides.length;

//           return (
//             <div
//               key={slide.id}
//               className={`slideshow__slide js-slider-home-slide ${
//                 isCurrent ? 'is-current' : isNext ? 'is-next' : isPrev ? 'is-prev' : ''
//               }`}
//               data-slide={slide.id}
//             >
//               <div className="slideshow__slide-background-parallax background-absolute">
//                 <div className="slideshow__slide-background-load-wrap background-absolute">
//                   <div className="slideshow__slide-background-load background-absolute">
//                     <div className="slideshow__slide-background-wrap background-absolute">
//                       <div className="slideshow__slide-background background-absolute">
//                         <div className="slideshow__slide-image-wrap background-absolute">
//                           <div
//                             className={`slideshow__slide-image background-absolute ${isCurrent ? 'zoom-active' : ''}`}
//                             style={{ backgroundImage: `url(${slide.image})` }}
//                           >
//                             <div className="slideshow__slide-overlay" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="slideshow__slide-caption">
//                 <div className="slideshow__slide-caption-text">
//                   <div className="container">
//                     <h1 className="slideshow__slide-caption-title">{slide.title}</h1>
//                     <a className="slideshow__slide-caption-subtitle -load o-hsub -link" href="#">
//                       <span className="slideshow__slide-caption-subtitle-label">{slide.subtitle}</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}

//         <div className="c-header-home_footer">
//           <div className="o-container">
//             <div className="c-header-home_controls -nomobile o-button-group">
//               <button
//                 className="o-button -white -square -left js-slider-home-button js-slider-home-prev"
//                 type="button"
//                 onClick={prevSlide}
//               >
//                 <span className="o-button_label">
//                   <svg className="o-button_icon" role="img">
//                     <use xlinkHref="#arrow-prev"></use>
//                   </svg>
//                 </span>
//               </button>
//               <button
//                 className="o-button -white -square js-slider-home-button js-slider-home-next"
//                 type="button"
//                 onClick={nextSlide}
//               >
//                 <span className="o-button_label">
//                   <svg className="o-button_icon" role="img">
//                     <use xlinkHref="#arrow-next"></use>
//                   </svg>
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <svg xmlns="http://www.w3.org/2000/svg">
//           <symbol viewBox="0 0 18 18" id="arrow-next">
//             <path d="M12.6,9L4,17.3L4.7,18l8.5-8.3l0,0L14,9l0,0l-0.7-0.7l0,0L4.7,0L4,0.7L12.6,9z" />
//           </symbol>
//           <symbol viewBox="0 0 18 18" id="arrow-prev">
//             <path d="M14,0.7L13.3,0L4.7,8.3l0,0L4,9l0,0l0.7,0.7l0,0l8.5,8.3l0.7-0.7L5.4,9L14,0.7z" />
//           </symbol>
//         </svg>
//       </section>
//       <Board logos={logos} />
//     </div>
//   );
// };

// export default Home;