import "../../style/Sections/Section2/Section2.css";
import Btn from "../button/button";
function Section2() {
  let card_index = [
    { id: 1, img: "https://themewagon.github.io/feane/images/o1.jpg" , data:'Tasty Thursdays'},
    { id: 2, img: "https://themewagon.github.io/feane/images/o2.jpg" , data: "Pizza Days" },
  ];
  return (
    <div className="Sec2_container container">
      {card_index.map((card) => {
       return(
         <div className="Sec2_card" key={card.id}>
          <div className="card_img">
            <img src={card.img} alt={card.id}></img>
          </div>
          <div className="card_data">
            <h2 className="card_name">{card.data}</h2>
            <p>
              20%<span> OFF</span>
            </p>
            <Btn styleName={"btn1"} text={"Order Now"} />
          </div>
        </div>
       )
      })}
    </div>
  );
}

export default Section2;
