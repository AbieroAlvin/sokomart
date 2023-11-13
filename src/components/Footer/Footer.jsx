import "./footer.css";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className=" flex items-center justify-center">
        <div className="row">
          <div className="col">
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-white text-left text-[1.5rem]">SupaMart</h1>
              </div>
              <p className="footer__text mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                sequi eveniet consequuntur quos et corporis in cupiditate
                aspernatur soluta ratione.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="footer__links">
              <h4 className="links__title">Top Categories</h4>
              <ul>
                <li>
                  <Link to="#">Mobile Phones</Link>
                </li>
                <li>
                  <Link to="#">Mordern Sofa</Link>
                </li>
                <li>
                  <Link to="#">Arm Chair</Link>
                </li>
                <li>
                  <Link to="#">Smart Watches</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="footer__links">
              <h4 className="links__title">Usefull Links</h4>
              <ul>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="footer__links">
              <h4 className="links__title">Contact</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <CiLocationOn className="text-white" />
                  <p>00200 Nairobi, Embakasi, Imara Daima</p>
                </li>
                <li className="flex items-center gap-2">
                  <BsTelephone className="text-white" />
                  <p>+254 725685512</p>
                </li>
                <li className="flex items-center gap-2">
                  <AiOutlineMail className="text-white" />
                  <p>alvinabiero@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <p className="footer__copy">
          Copyright {year} developed by Abiero Alvin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
