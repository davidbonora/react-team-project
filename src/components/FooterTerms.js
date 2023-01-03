import "./FooterTerms.module.css";
import { useEffect, useState } from "react";
import { FooterTermsDesktop } from "./FooterTermsDesktop";
import { FooterTermsMobile } from "./FooterTermsMobile";
// Terms and Conditions Component
function FooterTerms() {
  const [width, setWindowWidth] = useState(0);
  const [addTerms, setAddTerms] = useState(<FooterTermsDesktop/>);

// Different Terms and Conditions for Desktop and Mobile
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    const terms = width < 700 ? <FooterTermsMobile/> : <FooterTermsDesktop/>;
    setAddTerms(terms);
    setWindowWidth(width);
  }
  return <div>{addTerms}</div>;
}

export default FooterTerms;
