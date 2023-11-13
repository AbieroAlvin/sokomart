import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";

import { BsTrash3 } from "react-icons/bs";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <section className="flex items-center justify-center w-full">
        <div className="w-full flex items-center justify-center flex-wrap">
          <div className="flex lg:w-[78%] lg:p-[20px] p-0 w-full justify-around my-[10px]">
            <div className="col">
              {cartItems.length === 0 ? (
                <h2 className="text-xl text-center">
                  No items added to the cart
                </h2>
              ) : (
                <div>
                  {cartItems.map((item, index) => {
                    return <Tr key={index} item={item} />;
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="lg:w-[20%] lg:p-[20px] lg:m-[10px] p-[10px] m-[5px]">
            <div>
              <div className="flex items-center justify-between font-[500]">
                <h6>Subtotal</h6>
                <span>${totalAmount}</span>
              </div>

              <p className="font-[400] mt-2">
                taxes and shipping will calculate in checkout
              </p>

              <div>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="shop__btn w-full"
                  disabled={cartItems.length === 0}
                >
                  <Link to="/checkout">Checkout</Link>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="shop__btn w-full"
                >
                  <Link to="/shop">Continue Shopping</Link>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <div className="flex flex-col md:flex-row  md:gap-4 md:items-center gap-2 border-[1px] border-gray-300 rounded-md flex-wrap p-[5px] mb-2">
      <div>
        <img
          className="w-[50px] h-[50px] object-cover"
          src={item.imgUrl}
          alt={item.productName}
        />
      </div>
      <div>
        <span>{item.productName}</span>
      </div>
      <div>
        <span>$ {item.price}</span>
      </div>
      <div>
        <span>{item.quantity}px</span>
      </div>
      <div>
        <motion.button whileTap={{ scale: 1.1 }} onClick={deleteProduct}>
          <BsTrash3 className="cursor-pointer" />
        </motion.button>
      </div>
    </div>
  );
};

export default Cart;
