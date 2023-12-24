import React from "react";
import "./WishList.css";
import ItemProduct from "./ItemProduct";
import { useSelector } from "react-redux";

function WishList() {
  const wishlist = useSelector((state) => state.wishlistItem.items);

  return (
    <div className="container">
      <div className="wishlist">
        <div className="top-wishlist">
          <h4>
            Wish List ({
              wishlist.length
            }) </h4>
          <button type="submit" className="btn-primary">
            Move all to bag
          </button>
        </div>
        <div className="main-wishlist">
          <div className="card">
            <div className="card_top">
              {wishlist.map((data) => (
                <ItemProduct key={data.id} item={data} />
              ))}
            </div>
            <div className="card_bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;
