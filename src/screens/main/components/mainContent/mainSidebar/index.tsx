import FruitIcon from "@/UI/icons/FruitIcon";
import styles from "./styles.module.scss";
import MeatIcon from "@/UI/icons/MeatIcon";
import { MdKeyboardArrowRight } from "react-icons/md";
import React, { useState } from "react";

type MenuItem = {
  label: string;
  value: string;
  icon: JSX.Element;
  subItems?: Array<{ label: string; value: string }>;
};


const MainSidebar = () => {
  // States
  const [openStates, setOpenStates] = useState<Record<number, boolean>>({});
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Functions
  const handleToggleSubItems = (index: number) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));

    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === index ? null : index
    );
  };



  return (
    <div className={styles.sidebar_wrapper}>
      <ul className={styles.menu_items}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
             <li
              className={`${styles.menu_item} ${
                activeIndex === index ? styles.active_menu_item : ""
              }`}>
              {item.icon}
              <a href="#">{item.label}</a>
              <MdKeyboardArrowRight className={`${
                  openStates[index] ? styles.menu_open : ""
                }`}  onClick={() => handleToggleSubItems(index)} />
            </li>
            {item.subItems && (
              <ul
                className={`${styles.menu_subItems} ${
                  openStates[index] ? styles.menu_subItems_active : ""
                }`}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <li key={`${index}-${subIndex}`}>
                    <a href="#">{subItem.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default MainSidebar;


const menuItems = [
  {
    label: "Fruits & Vegetables",
    value: "fruits-and-vegetables",
    icon: <FruitIcon />,
    subItems: [
      {
        label: "Fruits",
        value: "fruits",
      },
      {
        label: "Vegetables",
        value: "vegetables",
      },
    ],
  },
  {
    label: "Meat & Fish",
    value: "meat-and-fish",
    icon: <MeatIcon />,
    subItems: [
      {
        label: "Meat",
        value: "meat",
      },
      {
        label: "Fish",
        value: "fish",
      },
    ],
  },
 
]
