import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-full bg-black/20 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <motion.img
              whileTap={{ scale: 1.2 }}
              src={userIcon}
              alt="Profile Icon"
              className=" w-[30px] h-[30px] cursor-pointer rounded-full"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="flex flex-col gap-2 items-center w-full">
              <Menu.Item>
                <a
                  className="hover:bg-blue-400 w-full text-center rounded-t-md hover:text-white"
                  href="/logout"
                >
                  Log Out
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  className="hover:bg-blue-400 w-full text-center rounded-b-md hover:text-white"
                  href="/login"
                >
                  Log In
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Profile;
