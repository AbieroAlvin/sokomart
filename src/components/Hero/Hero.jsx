import heroImg from "../../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {
  const year = new Date().getFullYear();
  return (
    <section className="w-full bg-[var(--hero-bg)] py-[40px] mx-auto">
      <div className="flex items-center justify-center lg:px-[60px]  md:px-[40px] px-[20px]  w-full">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="hero__content">
            <p className="hero__subtitle">Trending product in {year}</p>
            <h2>Make Your Interior More Minimalistic & Modern</h2>
            <p className="font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ut
              suscipit ex sapiente. Veniam illo nemo laudantium omnis labore
              corrupti?
            </p>
            <motion.button whileTap={{ scale: 1.2 }} className="shop__btn">
              <Link to="/shop">SHOP NOW</Link>
            </motion.button>
          </div>

          <div className="hero__img">
            <img src={heroImg} alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
