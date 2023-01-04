import { useEffect, useState } from "react";
import classes from "./DropdownActions.module.css";
import { SlArrowDown } from "react-icons/sl";
import movies from "../../movies.json";

function DropdownActions({ onOpen }) {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(true);
  const [byRelease, setByRelease] = useState(false);
  const [filter, setFilter] = useState([]);
  
  const handleRelease = (mode) => {
    setByRelease(mode);
  };

  useEffect(() => {
    if (window.innerWidth >= 1200) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, []);

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1200) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  });
  return (
    <>
      <div className={classes.dropdownContainer}>
        <ul>
          {mobile && (
            <>
              {open && (
                <>
                  <li
                    onClick={() => {
                      handleRelease(false);
                      setOpen(!open);
                    }}
                  >
                    {!byRelease && <span className={classes.light}></span>} ALL
                    FILMS ({movies.length})
                  </li>
                  <li
                    onClick={() => {
                      handleRelease(true);
                      setOpen(!open);
                    }}
                  >
                    {byRelease && <span className={classes.light}></span>} BY
                    RELEASE YEAR ({movies.length})
                  </li>
                </>
              )}
              {!open && !byRelease && (
                <li>
                  {<span className={classes.light}></span>} ALL FILMS (
                  {movies.length})
                </li>
              )}
              {!open && byRelease && (
                <li>
                  {byRelease && <span className={classes.light}></span>} BY
                  RELEASE YEAR ({movies.length})
                </li>
              )}
            </>
          )}
          {!mobile && (
            <>
              <li>
                {<span className={classes.light}></span>} ALL FILMS (
                {movies.length})
              </li>
              <li>
                {<span className={classes.light}></span>} BY RELEASE YEAR (
                {movies.length})
              </li>
            </>
          )}
        </ul>
        <SlArrowDown
          onClick={() => setOpen(!open)}
          className={`${classes.dropdownArrow} ${
            open && classes["turn-around"]
          }`}
        />
      </div>
    </>
  );
}

export default DropdownActions;
