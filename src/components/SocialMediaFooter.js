import classes from "./SocialMediaFooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChildren } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faInstagram,
  faYoutube,
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import kidsLogo from "../assets/logoKidsfooter/kidsLogo.png";

function SocialMediaFooter() {
  return (
    <section className={classes["all-icons"]}>
      <ul className={classes.icons}>
        <li className={classes["icon-item"]}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className={classes.facebook}>
              <FontAwesomeIcon
                className={classes.icon}
                icon={faFacebook}
                size="xs"
                color="white"
              />
            </i>
          </a>
        </li>
        <li className={classes["icon-item"]}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className={classes.intagram}>
              {" "}
              <FontAwesomeIcon
                className={classes.icon}
                icon={faInstagram}
                size="xs"
                color="white"
              />
            </i>
          </a>
        </li>
        <li className={classes["icon-item"]}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className={classes.twitter}>
              {" "}
              <FontAwesomeIcon
                className={classes.icon}
                icon={faTwitter}
                size="xs"
                color="white"
              />
            </i>
          </a>
        </li>
        <li className={classes["icon-item"]}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i classname={classes.youtube}>
              <FontAwesomeIcon
                className={classes.icon}
                icon={faYoutube}
                size="xs"
                color="white"
              />
            </i>
          </a>
        </li>
        <div className={classes["dividing-line"]}></div>
        <li className={classes["logo-item"]}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={kidsLogo} alt="kid-logo" />
            {/* <i className={classes.kids}>
            <FontAwesomeIcon className={classes.icon} icon={faChildren } size="xs" color="white"  />
          </i> */}
          </a>
        </li>
      </ul>
    </section>
  );
}

export default SocialMediaFooter;
