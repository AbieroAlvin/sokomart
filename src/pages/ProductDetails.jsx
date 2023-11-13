import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { motion } from "framer-motion";
import ProductList from "../components/UI/ProductList";

import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";
import "../styles/product-details.css";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj);
    toast.success("Review submitted");
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );

    toast.success("Product added successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className=" flex items-center justify-center w-full pt-0 lg:px-[60px] md:px-[40px] px-[20px]">
        <div className="row md:grid-cols-2 grid-cols-1 gap-12 items-center">
          <div className="col">
            <img src={imgUrl} alt="/" />
          </div>
          <div className="col flex items-center justify-center">
            <div className="product__details">
              <h2>{productName}</h2>
              <div className="product__rating">
                <div className="flex gap-2">
                  <span>
                    <BsStarFill />
                  </span>
                  <span>
                    <BsStarFill />
                  </span>
                  <span>
                    <BsStarFill />
                  </span>
                  <span>
                    <BsStarFill />
                  </span>
                  <span>
                    <BsStarHalf />
                  </span>
                </div>

                <p>
                  (<span>{avgRating}</span> ratings)
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="product__price">${price}</span>
                <span className="font-[400]">
                  Category: {category.toUpperCase()}
                </span>
              </div>

              <p className="mt-4">{shortDesc}</p>

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="shop__btn"
                onClick={addToCart}
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4 pt-0  md:px-[40px] px-[20px] ">
        <div className="row flex flex-col items-center justify-center">
          <div className="col w-full">
            <div className="tab__wrapper flex items-center gap-6">
              <h6
                className={`${
                  tab === "desc" ? "active__tab" : ""
                } cursor-pointer`}
                onClick={() => setTab("desc")}
              >
                Description
              </h6>
              <h6
                className={`${
                  tab === "rev" ? "active__tab" : ""
                } cursor-pointer`}
                onClick={() => setTab("rev")}
              >
                Reviews ({reviews.length})
              </h6>
            </div>

            {tab === "desc" ? (
              <div className="tab__content mt-4">
                <p>{description}</p>
              </div>
            ) : (
              <div className="product__review mt-4">
                <div className="review__wrapper">
                  <ul>
                    {reviews.map((item, index) => (
                      <li key={index} className="mb-4">
                        <h6>Mary Jane</h6>
                        <span>{item.rating}(rating)</span>
                        <p>{item.text}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="review__form">
                    <h4>Leave your experience</h4>
                    <form onSubmit={submitHandler}>
                      <div className="form__group">
                        <input
                          ref={reviewUser}
                          type="text"
                          placeholder="Enter name"
                          required
                        />
                      </div>

                      <div className="form__group flex gap-2">
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(1)}
                        >
                          1{rating === 1 ? <BsStarFill /> : <BsStar />}
                        </motion.span>
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(2)}
                        >
                          2{rating === 2 ? <BsStarFill /> : <BsStar />}
                        </motion.span>
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(3)}
                        >
                          3{rating === 3 ? <BsStarFill /> : <BsStar />}
                        </motion.span>
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(4)}
                        >
                          4{rating === 4 ? <BsStarFill /> : <BsStar />}
                        </motion.span>
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(5)}
                        >
                          5{rating === 5 ? <BsStarFill /> : <BsStar />}
                        </motion.span>
                      </div>

                      <div className="form__group">
                        <textarea
                          ref={reviewMsg}
                          rows={4}
                          type="text"
                          placeholder="Review message"
                          required
                        />
                      </div>

                      <motion.button
                        whileTap={{ scale: 1.2 }}
                        type="submit"
                        className="bg-black text-white px-4 font-md py-2 rounded-md"
                      >
                        Submit
                      </motion.button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="col">
            <h2 className="related__title mt-5 md:pr-[40px]">
              You might also like
            </h2>
            <ProductList data={relatedProducts} />
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
