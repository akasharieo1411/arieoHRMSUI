import { useState, useEffect } from "react";
import { Button, Navbar, Drawer } from "flowbite-react";
import { Icon } from "@iconify/react";
import Profile from "./Profile";
import Notification from "./Notification";
import MobileSidebar from "../sidebar/MobileSidebar";
import { Link } from "react-router-dom"; // Ensure you're using `react-router-dom` instead of `react-router`

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mobile Sidebar
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-[5] ${isSticky
            ? "bg-white dark:bg-gray-900 fixed w-full"
            : "bg-white dark:bg-gray-800"
          } transition-colors duration-300`}
      >
        <Navbar
          fluid
          className={`rounded-none py-4 sm:px-30 px-4 ${
            isSticky
              ? "bg-white dark:bg-gray-900"
              : "bg-transparent dark:bg-transparent"
          } transition-colors duration-300`}
        >
          {/* Mobile Toggle Icon */}
          <div className="flex gap-3 items-center justify-between w-full">
            <div className="flex gap-2 items-center">
              <span
                onClick={() => setIsOpen(true)}
                className="h-10 w-10 flex text-black dark:text-white text-opacity-65 xl:hidden hover:text-primary hover:bg-lightprimary dark:hover:bg-gray-700 rounded-full justify-center items-center cursor-pointer"
              >
                <Icon icon="solar:hamburger-menu-line-duotone" height={21} />
              </span>
              <Notification />
            </div>

            <div className="flex gap-4 items-center">
              <Profile />
            </div>
          </div>
        </Navbar>
      </header>

      {/* Mobile Sidebar */}
      <Drawer open={isOpen} onClose={handleClose} className="w-130">
        <Drawer.Items>
          <MobileSidebar />
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default Header;
