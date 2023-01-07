import "./Cardsprincipal.module.css";
import React from "react";
import Carousel from "better-react-carousel";
// import "react-responsive-carousel/lib/style/carousel.min.css";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4.jpg";
import img5 from "../assets/img/5.jpg";
import img6 from "../assets/img/6.jpg";
import img7 from "../assets/img/7.jpg";

function Cardsprincipal() {
  return (
    <>
      <div>
        <h3>Explore More</h3>
      </div>
      <hr></hr>
      <Carousel cols={3} row={1} gap={20} loop>
        <Carousel.Item>
          <img width="100%" src={img1} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img2} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img3} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img4} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img5} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img6} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img7} />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Cardsprincipal;
