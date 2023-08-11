import React from "react";
import "./footer.scss";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flogo_copy">
        <img className="logo" src="../assets/images/flogo.png" alt="Logo" />
        <h6>
          copyright &copy; 2023 , <span className="txtclr">Clothes.com</span>{" "}
        </h6>
      </div>
      <div className="listt">
        <div className="my-2 listt_text">Get To Know Us</div>

        <ul className="acl">
          <li>
            <a className="about-contact-us" href="/menswear/aboutus">
              About Us
            </a>
          </li>
          <li>
            <Link className="about-contact-us" href="/menswear/contactus">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="social">
        <div className="my-2 social_text">Connect with Us</div>
        <ul className="social_icon">
          <Link href="/whatsapp">
            <BsWhatsapp className="iconclr m-2" />
          </Link>
          <Link href="/instagram">
            <BsInstagram className="iconclr m-2  " />
          </Link>
          <Link href="/facebook">
            <BsFacebook className="iconclr m-2 " />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
