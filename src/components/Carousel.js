import style from "./Carousel.module.css";
import { useState } from "react";
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
    <div className={style.carouselbody}>
      <div>
        <h3>Explore More</h3>
      </div>
      <hr></hr>
      <Carousel cols={3} row={1} gap={20}>
        <Carousel.Item>
          <div>
          <img width="100%" src={img1} />
          <div className={style.iconcontainer}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div>
          <img width="100%" src={img2} />
          <div className={style.iconcontainer2}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div>
          <img width="100%" src={img3} />
          <div className={style.iconcontainer}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div>
          <img width="100%" src={img4} />
          <div className={style.iconcontainer}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div>
          <img width="100%" src={img5} />
          <div className={style.iconcontainer}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
          <img width="100%" src={img6} />
          <div className={style.iconcontainer}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
          <img width="100%" src={img7} />
          <div className={style.iconcontainer}></div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Cardsprincipal;

// export default function Carousel(props: any) {
//   const img = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [selectedImage, setSelectedImage] = useState(img[4]);

//   const previous = () =>{
//     const condition = selectedIndex
//   }
// }
