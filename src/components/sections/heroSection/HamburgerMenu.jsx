import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
const toggleVariant = {
  hidden: {
    y: "-100%",
  },
  show: {
    y: "0%",
    transition: {
      duration: 1,
      type: "spring",
      bounce: "0.2",
      ease: "easeOut",
    },
  },
};
const HamburgerMenu = ({ selectedItem, handleItemClick }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleHamburgerClick = () => {
    console.log("h9ioonwefwe");
    setMenuVisible((prev) => !prev);
  };

  const handleMenuItemClick = (itemName) => {
    // Close the menu when an item is clicked
    setMenuVisible((prev) => !prev);

    // Handle the item click
    handleItemClick(itemName);
  };

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact me" },
  ];

  return (
    <>
      <div
        className={`space-y-1 md:hidden cursor-pointer z-40 `}
        onClick={() => handleHamburgerClick()}
      >
        {menuVisible ? <MenuIcon style={{ color: "white" }} /> : <MenuIcon />}
      </div>

      {menuVisible && (
        <motion.ul
          variants={toggleVariant}
          initial={"hidden"}
          animate={"show"}
          id="menu"
          className={`bg-indigo-900 md:hidden absolute left-0 top-0 w-full p-10 rounded-b-3xl text-white space-y-10 text-center z-30`}
        >
          {navigationItems.map((item) => (
            <li
              key={item.id}
              className={
                selectedItem === item.id
                  ? "border-solid border-2 border-blue-700 py-1 px-3 rounded-md text-blue-700"
                  : "py-1 px-3"
              }
            >
              <a
                href={`#${item.id}`}
                onClick={
                  () => handleMenuItemClick(item.id) // Call handleMenuItemClick
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default HamburgerMenu;
