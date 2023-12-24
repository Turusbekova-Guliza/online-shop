import React, { useState } from "react";
import "./Product.css";
import view from "../../assets/svg/view small.svg";
import like from "../../assets/svg/heart small.svg";
import Star from "../../assets/svg/Star";
import { addItem } from "../../redux/wishList/wishlistSlice";
import { useDispatch } from "react-redux";

function Product({ item }) {

  const [clicked, setClicked] = useState(false)

  const dispatch = useDispatch();

  const addWishList = (product) => {
    dispatch(addItem(product));
    setClicked(!clicked)
  };

  // const handleAddToCard = () => {
  //   dispatch(add)
  // }

  return (
    <div className="product-item">
      <div className="product-image">
        <img className="main-image" src={item.images[0]} alt="image" />
        <div className="discount">{item.discount}</div>
        <div className="icons">
          <div
            onClick={() => addWishList(item)} className="icon">
            <img
            src={like}
            alt="text"
            style={{ backgroundColor: clicked ? 'crimson' : 'transparent', borderRadius: '50%'}} />
          </div>
          <div className="icon">
            <img src={view} alt="text" />
          </div>
        </div>
        <button className="product-btn">Add To Cart</button>
      </div>
      <div className="product-detail">
        <p className="product-title">{item.title}</p>
        <div className="prices">
          <p className="discount-price">{item.discountPrice}</p>
          <p className="price">{item.price}</p>
        </div>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <Star key={index} fill={star <= item.rating ? "#FFAD33" : "grey"} />
          ))}
          <p>({item.wishList})</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
