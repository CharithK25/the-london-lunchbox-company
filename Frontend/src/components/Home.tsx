// src/components/Home.tsx
import React, { useState, useEffect } from "react";
import { motion, type Variants} from "framer-motion";
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
import InstagramIcon from "../Assets/Instagram-icon.png"; // Instagram icon path
import FacebookIcon from "../Assets/Facebook-icon.png"; // Facebook icon path

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

/** ── Framer Motion variants ───────────────────────────── */
const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

// Slightly different fly-in direction per index
const flyIn = (i: number) : Variants => ({
  hidden: {
    opacity: 0,
    x: i % 2 === 0 ? -80 : 80,
    y: 60,
    rotate: i % 2 === 0 ? -6 : 6,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 12 },
  },
});

const Home: React.FC = () => {
  const [imgs, setImgs] = useState(0);
  // inside Home component, before return
const variants = { active: { backgroundColor: "#f00" } };

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
          </div>
        </motion.div>
      </section>
      <Board logos={logos} />
<div className="cart-grid">
  {/* Inner animated wrapper */}
  <motion.div
    className="cards"
    variants={gridVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.div variants={flyIn(0)} whileHover={{ y: -6 }}>
      <CardReu
        descriptions=" A vibrant snack mix with sweets and crisps—perfect for a quick energy boost."
        name=" Meal A"
        image={homeImage}
        ratings={4}
      />
    </motion.div>
    <motion.div className="card-item" variants={flyIn(1)} whileHover={{ y: -6 }}>
      <CardReu
        name=" Meal B"
        descriptions="A wholesome lunch with a sandwich, crisps, fruit, and a refreshing drink."
        image={homeSlide1}
        ratings={4}
      />
    </motion.div>
    <motion.div className="card-item" variants={flyIn(2)} whileHover={{ y: -6 }}>
      <CardReu
        name=" Meal C"
        descriptions="A light yet satisfying meal with a sandwich, juice, fruit, and a sweet treat."
        image={homeSlide2}
        ratings={4}
      />
    </motion.div>
    <motion.div className="card-item" variants={flyIn(3)} whileHover={{ y: -6 }}>
      <CardReu
        name=" Meal D"
        descriptions=" A premium box with wraps, mini desserts, cream, and fresh fruit."
        image={homeSlide3}
        ratings={4}
      />
    </motion.div>
  </motion.div>
</div>
<footer className="footer">
        <div className="footer-column">
          <h3>GET TO KNOW US</h3>
          <ul>
            <li>Our Story</li>
            <li>Our Process</li>
            <li>Events</li>
            <li>Careers</li>
            <li>Delivery Options</li>
            <li>Find a Store</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>LET US HELP YOU</h3>
          <ul>
            <li>FAQ</li>
            <li>Phone</li>
            <li>Email</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect with us</h3>
            {/* </div> */}
            <ul className="social-list">
            <li>
              <img src={InstagramIcon} alt="Instagram" className="social-icon" /> Instagram
            </li>
            <li>
              <img src={FacebookIcon} alt="Facebook" className="social-icon" /> Facebook
            </li>
          </ul>
          </div>
          </footer>
    </div>
  );
};
export default Home;