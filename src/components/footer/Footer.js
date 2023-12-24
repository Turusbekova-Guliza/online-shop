import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import QRCode from "../../assets/svg/Qrcode 1.svg";
import AppStore from "../../assets/svg/AppStore.svg";
import GooglePlay from "../../assets/svg/GooglePlay.svg";
import FacebookIcon from "../../assets/svg/Icon-Facebook.svg";
import TwitterIcon from "../../assets/svg/Icon-Twitter.svg";
import InstagramIcon from "../../assets/svg/icon-instagram.svg";
import LinkedinIcon from "../../assets/svg/Icon-Linkedin.svg";
import SendIcon from "../../assets/svg/icon-send-footer.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div>
            <h5>Exclusive</h5>
            <h6>Subscribe</h6>
            <p>Get 10% off your first order</p>
            <label className="label-footer">
              <input
                className="input-footer"
                type="email"
                placeholder="Enter your email"
              />
              <button className="btn-footer">
                <img src={SendIcon} alt="" />
              </button>
            </label>
          </div>
          <div>
            <h6>Support</h6>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
            <br />
            <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
          </div>
          <div>
            <h6>Account</h6>
            <p>My Account</p>
            <Link to="/signUp">Login / Register</Link>
            <br />
            <Link to="/card">Cart</Link>
            <br />
            <Link to="/wishList">Wishlist</Link>
            <br />
            <Link to="/about">Shop</Link>
          </div>
          <div>
            <h6>Quick Link</h6>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div>
            <h6>Download App</h6>
            <p>Save $3 with App New User Only</p>
            <div className="images-store">
              <img src={QRCode} alt="QRCode" />
              <div className="store">
                <img src={GooglePlay} alt="GooglePlay" />
                <img src={AppStore} alt="AppStore" />
              </div>
            </div>
            <div className="link-to-app">
              <img src={FacebookIcon} alt="Facebook" />
              <img src={TwitterIcon} alt="Twitter" />
              <img src={InstagramIcon} alt="Instagram" />
              <img src={LinkedinIcon} alt="Linkedin" />
            </div>
          </div>
        </div>
        <hr />
        <p className="footer-end-p">© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
