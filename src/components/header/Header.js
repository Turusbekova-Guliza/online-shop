import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Exclusive.png";
import Search from "../../assets/svg/search.svg";
import Wishlist from "../../assets/svg/Wishlist.svg";
import Karzina from "../../assets/svg/karzina.svg";
import UserLog from "../../assets/svg/user.svg";
import { useSelector } from "react-redux";

function Header() {

  const wishlist = useSelector((state) => state.wishlistItem.items);

  const user = useSelector((state) => state.user.user)

  return (
    <div>
      <div className="header-block-1">
        <div className="block-1">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a href="https://www.google.com">
            <b>ShopNow</b>
          </a>
        </div>
        <select className="select-1">
          <option value="language">English</option>
          <option value="language">Русский</option>
          <option value="language">Кыргызча</option>
        </select>
      </div>
      <header>
        <div className="container">
          <div className="header">
            <Link to="/">
              <img className="logo-header" src={Logo} alt="" />
            </Link>
            <nav>
              <ul className="ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/signUp">Sign up</Link>
                </li>
              </ul>
            </nav>
            <div className="header-flex">
              <label className="label-header">
                <input
                  className="search-input"
                  type="search"
                  placeholder="search product"
                />
                <img className="search-icon" src={Search} alt="" />
              </label>
              <Link className="navIcon" to="/wishList">
                <img src={Wishlist} alt="" />
                <div className="count">{wishlist.length}</div>
              </Link>
              <Link to="/card">
                <img src={Karzina} alt="" />
              </Link>
              {user &&
              <Link to="/account">
                <img className="account_avatar" src={user.avatar ? user.avatar : UserLog} alt="" />
              </Link>
            }
            </div>
          </div>
        </div>
      </header>
      <hr />
    </div>
  );
}

export default Header;
