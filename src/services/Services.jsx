import "./services.css";
import { motion } from "framer-motion";
import { TbTruckDelivery } from "react-icons/tb";
import serviceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section className="w-full py-[40px]">
      <div className="flex justify-center items-center lg:px-[60px]  md:px-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-center gap-6">
          {serviceData.map((item, index) => {
            return (
              <div className=" w-full" key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="service__item"
                  style={{ background: `${item.bg}` }}
                >
                  <span>
                    <TbTruckDelivery
                      size={36}
                      className="bg-[var(--primary-color)] rounded-full p-[10px] text-white font-bold"
                    />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
