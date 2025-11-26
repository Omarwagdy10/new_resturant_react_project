import '../../style/Sections/Section1/Section1.css'
import Btn from '../button/button';
import '../../style/Btn/Btn.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
function Section1 (){
const myStyle = "primary-btn"
    return (
      <Swiper
        navigation
        modules={[Navigation]}
        className="mySwiper carusle container"
      >
          <SwiperSlide className="carusel_data">
          <h2>Fast Food Restaurant</h2>
          <p>
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <div>
            <Btn styleName={myStyle} text={"Order Now"} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="carusel_data">
          <h2>Fast Food Restaurant</h2>
          <p>
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <div>
            <Btn styleName={myStyle} text={"Order Now"} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="carusel_data">
          <h2>Fast Food Restaurant</h2>
          <p>
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <div>
            <Btn text={"Order Now"} styleName={myStyle} />
          </div>
        </SwiperSlide>
      </Swiper>
    );
}

export default Section1

          