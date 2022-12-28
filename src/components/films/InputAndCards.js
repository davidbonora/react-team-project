import classes from "./InputAndCards.module.css";
import { FaAngleDown } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";

function InputAndCards() {
  return (
    <div className={classes.bound_vertical}>
      <div className={classes.filters_container}>
        <div className="header">
          <TbMinusVertical className={classes.minus_vertical} />
          <span>ALL FILMS (11)</span>
          <FaAngleDown className={classes.arrow_down} />
        </div>
        <div>
          <ul className={classes.films_list}>
            <li className={classes.release}>BY RELEASE YEAR (11)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InputAndCards;
