import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section className="flex items-center justify-center lg:px-[60px] md:px-[40px] px-[20px] my-4">
        <div className="container">
          <div className="row grid md:grid-cols-[70%_30%] grid-cols-1 gap-8">
            <div className="col">
              <h6 className="mb-4 font-bold">Billing Information</h6>
              <form className="billing__form">
                <div className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form__group">
                  <input type="number" placeholder="Phone number" />
                </div>
                <div className="form__group">
                  <input type="text" placeholder="Street Address" />
                </div>
                <div className="form__group">
                  <input type="text" placeholder="City" />
                </div>
                <div className="form__group">
                  <input type="text" placeholder="Postal code" />
                </div>
                <div className="form__group">
                  <input type="text" placeholder="Country" />
                </div>
              </form>
            </div>
            <div className="col">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br /> free shipping
                  </span>{" "}
                  <span>$0</span>
                </h6>

                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>

                <button className="w-full py-[10px] rounded-md bg-white text-[var(--primary-color)] mt-5 font-[500]">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Checkout;
