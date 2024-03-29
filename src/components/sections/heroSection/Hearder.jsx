import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-scroll";
import "/src/css/progress.css";

function Header() {
  const [selectedItem, setSelectedItem] = useState("home");

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "project", label: "Projects" },
    { id: "About", label: "About" },
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="overflow-hidden relative bg-gradient-to-t from-indigo-50">
      <nav className="w-full fixed top-0 z-20 backdrop-blur-md bg-white/50 ...">
        <div className="container mx-auto py-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-900">H</span>
          <ul className="hidden md:flex space-x-10 text-gray-700 font-bold text-sm uppercase">
            {navigationItems.map((item) => (
              <li
                key={item.id}
                className={
                  selectedItem === item.id
                    ? "py-1 px-3 text-blue-700"
                    : "py-1 px-3"
                }
              >
                <Link
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1500}
                  to={`${item.id}`}
                  className="cursor-pointer"
                  onClick={() => handleItemClick(item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <HamburgerMenu />
        </div>
        <motion.div
          className="progress-bar bg-gradient-to-r from-white to-blue-700 ... h-1 left-0 right-0 fixed z-20"
          style={{ scaleX }}
        />
      </nav>
    </div>
  );
}

export default Header;
