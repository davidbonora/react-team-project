import style from "./Carousel.module.css";
import React from "react";
import Carousel from "better-react-carousel";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4.jpg";
import img5 from "../assets/img/5.jpg";
import img6 from "../assets/img/6.jpg";
import img7 from "../assets/img/7.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";

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
            <div className={style.iconcontainer}>
              <FontAwesomeIcon
                className={style.icon1}
                icon={faGripLines}
                size="2xl"
              />
            </div>
            <div className={style.trapecio}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img width="100%" src={img2} />
            <div className={style.iconcontainer}>
              {" "}
              <FontAwesomeIcon
                className={style.icon1}
                icon={faGripLines}
                size="2xl"
              />
            </div>
            <div className={style.trapecio2}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img width="100%" src={img3} />
            <div className={style.iconcontainer}>
              {" "}
              <FontAwesomeIcon
                className={style.icon1}
                icon={faGripLines}
                size="2xl"
              />
            </div>
            <div className={style.trapecio3}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img width="100%" src={img4} />
            <div className={style.iconcontainer}>
              {" "}
              <FontAwesomeIcon
                className={style.icon1}
                icon={faGripLines}
                size="2xl"
              />
            </div>
            <div className={style.trapecio4}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img width="100%" src={img5} />
            <div className={style.iconcontainer}>
              {" "}
              <FontAwesomeIcon
                className={style.icon1}
                icon={faGripLines}
                size="2xl"
              />
            </div>
            <div className={style.trapecio5}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img width="100%" src={img6} />
            <div className={style.iconcontainer}>
              {" "}
              <FontAwesomeIcon
                className={style.icon1}
                icon={faGripLines}
                size="2xl"
              />
            </div>
            <div className={style.trapecio6}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img width="100%" src={img7} />
            <div className={style.iconcontainer}>
              {" "}
              <FontAwesomeIcon
                className={style.icon1}
                icon={faGripLines}
                size="2xl"
              />
            </div>
            <div className={style.trapecio7}></div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Cardsprincipal;
