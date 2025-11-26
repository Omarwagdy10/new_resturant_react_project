import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../style/Sections/Section6/Section6.css";

const data = [
  {
    id: 1,
    p: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are",
    uname: "omar wagdy",
    data: "position",
    img: "	https://themewagon.github.io/feane/images/client2.jpg",
  },
  {
    id: 2,
    p: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are",
    uname: "Salma wagdy",
    data: "position",
    img: "	https://themewagon.github.io/feane/images/client1.jpg",
  },
  {
    id: 3,
    p: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are",
    uname: "Ahmed wagdy",
    data: "position",
    img: "	https://themewagon.github.io/feane/images/client2.jpg",
  },

  {
    id: 5,
    p: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are",
    uname: "Mona wagdy",
    data: "position",
    img: "	https://themewagon.github.io/feane/images/client1.jpg",
  },
];


function Section6() {
  return (
    <div className="Section6 container">
      <Swiper
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        spaceBetween={20}
        className="mySwiper"
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[ Autoplay]}
      >
        {data.map((data) => (
          <SwiperSlide className="carusel_data2">
            <div className="carusle_info">
              <p>{data.p}</p>
              <h4>{data.uname}</h4>
              <h5>{data.data}</h5>
            </div>
            <div className="carusel_image">
              <img className="" src={data.img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Section6;

