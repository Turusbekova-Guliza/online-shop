import React from 'react'
import DeleteItem from '../../assets/svg/delete svg.svg'
import './WishList.css'
import { deleteItem } from '../../redux/wishList/wishlistSlice'
import { useDispatch } from 'react-redux'

function ItemProduct({ item }) {

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteItem(id))
  }

  return (
    <div>
        <div className="product-item">
        <div className="product-image">
          <img className="main-image" src={item.images[0]} alt="image" />
          <div className="discount">{item.discount}</div>
          <div className="icons">
            <div onClick={() => handleDelete(item.id)} className="icon">
              <img src={DeleteItem} alt="text" />
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
        </div>
      </div>
    </div>
  )
}

export default ItemProduct