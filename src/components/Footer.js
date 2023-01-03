import "./Footer.module.css";
import { FooterTermsDesktop } from "./FooterTermsDesktop";
import SocialMediaFooter from "./SocialMediaFooter";
import FooterTerms from "./FooterTerms";

// Main Footer Component

function Footer() {
  const year = new Date().getFullYear();
  const footerStyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: "10px",
  };
  return (
    <footer style={footerStyle}>
        <p>More From Code Wars: </p>
        <SocialMediaFooter></SocialMediaFooter>
      <p>TM & © {year} Antoniofilm Ltd. All Rights Reserved.</p>
      <FooterTerms></FooterTerms>
    </footer>
  );
}

export default Footer;
