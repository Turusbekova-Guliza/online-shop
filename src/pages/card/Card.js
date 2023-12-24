import React from "react";
import "./Card.css";
import DropUp from "../../assets/svg/Drop-Up-Small.svg";
import DropDown from "../../assets/svg/Drop-Down-Small.svg";
import DropImg from "../../assets/images/g27cq4-500x500 1.png";

function Card() {
  return (
    <div className="basket">
      <div className="container">
        <div className="basket_top">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cart-title">
                  <img src={DropImg} alt="" />
                  <span>title</span>
                </td>
                <td>
                  <p>650$</p>
                </td>
                <td className="box">
                  <div className="quantity">
                    <p>1</p>
                    <div className="q-count">
                      <img className="drop_up" src={DropUp} alt="" />
                      <img className="drop_down" src={DropDown} alt="" />
                    </div>
                  </div>
                </td>
                <td>650$</td>
              </tr>
            </tbody>
          </table>
          <div className="basket_btns">
            <button>Return to shop</button>
            <button>Update card</button>
          </div>
        </div>
        <div className="basket_main">
          <div className="main_left">
            <input type="number" placeholder="Coupon Code" />
            <button>Apply Coupon</button>
          </div>
          <div className="main_right">
            <h3>Cart Total</h3>
            <div className="main_item">
              <span>Subtotal</span>
              <span>1750$</span>
            </div>
            <hr />
            <div className="main_item">
              <span>Shipping</span>
              <span>free</span>
            </div>
            <hr />
            <div className="main_item">
              <span>Total: </span>
              <span>1750$</span>
            </div>
            <hr />
            <div className="cart_btn">
              <button>Procees to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
