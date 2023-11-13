import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Helmet from "../components/Helmet/Helmet";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import Clock from "../components/UI/Clock";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import products from "../assets/data/products";

import counterImg from "../assets/images/counter-timer-img.png";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setbestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setbestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section>
        <Hero />
      </section>
      <Services />

      <section className="py-[30px] flex items-center justify-center">
        <div className="container">
          <div className="text-center md:mb-6 mb-8">
            <h2 className="section__title">Trending Products</h2>
          </div>

          <ProductList data={trendingProducts} />
        </div>
      </section>

      <section className="py-[30px] flex items-center justify-center">
        <div className="container">
          <div className="text-center md:mb-6 mb-8">
            <h2 className="section__title">Best Sales Products</h2>
          </div>

          <ProductList data={bestSalesProducts} />
        </div>
      </section>

      <section className="bg-[var(--primary-color)]  flex items-center justify-center py-[30px] md:h-[300px] ">
        <div className="row grid md:grid-cols-2 grid-cols-1 items-center  ">
          <div className="col flex flex-col items-center justify-center ">
            <div className="clock__top-content">
              <h4 className="text-white text-[24px] mb-2">Limited Offers</h4>
              <h3 className="text-white text-[20px] mb-3">Quality Armchair</h3>
            </div>
            <Clock />

            <motion.button
              whileTap={{ scale: 1.2 }}
              className="shop__btn bg-white text-[var(--primary-color)] font-[600]"
            >
              <Link to="/shop" className=" hover:text-[var(--primary-color)]">
                Visit Store
              </Link>
            </motion.button>
          </div>
          <div className="col text-end flex items-center justify-center">
            <img src={counterImg} alt="/" />
          </div>
        </div>
      </section>

      <section className="py-[30px] last:flex items-center justify-center">
        <div className="container">
          <div className="col text-center md:mb-6 mb-8">
            <h2 className="section__title">New Arrivals</h2>
          </div>

          <ProductList data={mobileProducts} />
        </div>
      </section>

      <section className="py-[30px] flex items-center justify-center">
        <div className="container">
          <div className="col text-center md:mb-6 mb-8">
            <h2 className="section__title">Popular in Category</h2>
          </div>
          <ProductList data={popularProducts} />
        </div>
      </section>

      <section className="py-[30px] flex items-center justify-center">
        <div className="container">
          <div className="col text-center md:mb-6 mb-8">
            <h2 className="section__title">Headphones</h2>
          </div>
          <ProductList data={wirelessProducts} />
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
