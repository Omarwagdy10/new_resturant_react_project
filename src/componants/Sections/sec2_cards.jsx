import "../../style/Sections/Section3/Card_container.css";
import { ShoppingCart } from "lucide-react";

function Card_container({data}) {


  return (
    <div className="Card_container">
      {data.map((card) => {
        return (
          <div className="Card" key={card.id}>
            <div className="Card_Img">
              <img src={card.image} alt={card.id}></img>
            </div>
            <div className="Card_Data">
              <h3 className="">{card.productName}</h3>
              <p>{card.paragraph}</p>
              <div className="Card_Price">
                <p>{card.price}</p>
                <div className="icon_container">
                  <ShoppingCart className="" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card_container;
