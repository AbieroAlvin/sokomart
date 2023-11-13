import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../styles/product-card.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );

    toast.success("Product added successfully");
  };
  return (
    <div className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 1.1 }} src={item.imgUrl} alt="/" />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span className=" block">{item.category}</span>
        </div>
        <div className="product__card-bottom flex items-center justify-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.1 }} onClick={addToCart}>
            <AiOutlinePlus className="text-[1.2rem] p-[5px] bg-[var(--primary-color)] text-white rounded-full" />
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
