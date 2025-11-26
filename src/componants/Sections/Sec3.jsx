import { useState } from "react";
import Card_container from "./sec2_cards";
import "../../style/Sections/Section3/Section3.css";
import Btn from '../button/button'
function Section3() {
  const [active, setActive] = useState(0);

  const items = ["All", "Burger", "Pizza", "Pasta", "Fries"];
  const card = [
    {
      id: 1,
      image: "https://themewagon.github.io/feane/images/f1.png",
      productName: "Delicious Pizza",
      item: "Pizza",
      paragraph:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$20",
    },

    {
      id: 2,
      image: "	https://themewagon.github.io/feane/images/f2.png",
      productName: "Delicious Burger",
      item: "Burger",
      paragraph:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$15",
    },

    {
      id: 3,
      image: "https://themewagon.github.io/feane/images/f3.png",
      productName: "Delicious Pizza",
      item: "Pizza",
      paragraph:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$17",
    },

    {
      id: 4,
      image: "https://themewagon.github.io/feane/images/f4.png",
      productName: "Delicious Pasta",
      item: "Pasta",
      paragraph:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$18",
    },

    {
      id: 5,
      image: "https://themewagon.github.io/feane/images/f5.png",
      productName: "French Fries",
      item: "Fries",
      paragraph:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$10",
    },

    {
      id: 6,
      image: "https://themewagon.github.io/feane/images/f6.png",
      productName: "Delicious Pizza",
      item: "Fries",
      paragraph:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$16",
    },

    {
      id: 7,
      image: "https://themewagon.github.io/feane/images/f7.png",
      productName: "Tasty Burger",
      item: "Burger",
      paragraph:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$12",
    },

    {
      id: 8,
      image: "https://themewagon.github.io/feane/images/f8.png",
      productName: "Tasty Burger",
      item: "Burger",
      paragraph:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$14",
    },

    {
      id: 9,
      image: "https://themewagon.github.io/feane/images/f9.png",
      productName: "Delicious Pasta",
      item: "Pasta",
      paragraph:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$10",
    },
  ];

  // const filterData = active === 0? card: card.filter((itemName) =>itemName.item.toLowerCase().includes(items[active].toLowerCase())
  //   );
  const filterData =
    active === 0
      ? card
      : card.filter((itemName) =>
          itemName.item.toLowerCase().includes(items[active].toLowerCase())
        );

  return (
    <div className="Section3_container container">
      <h2>Our Menu</h2>

      <div className="menu_navbar">
        {items.map((item, index) => (
          <p
            className={active === index ? "active " : ""}
            onClick={() => setActive(index)}
          >
            {item}
          </p>
        ))}
      </div>

      <Card_container data={filterData}  />

      <Btn styleName={'sec3_btn'} text={'View More'}/>
    </div>
  );
}

export default Section3;
