import classes from "./ShowMoreBtn.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
const ShowMoreBtn = () => {
  return (
    <button className={classes["show-more"]}>SHOW MORE <FontAwesomeIcon icon={faChevronDown}/></button>
  )
}

export default ShowMoreBtn