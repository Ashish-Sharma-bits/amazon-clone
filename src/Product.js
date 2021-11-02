import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import reducer from "./reducer";
function Product({ title, price, image, rating }) {
  const [state, dispatch] = useStateValue();
  const AddToBasket = () => {
    dispatch({
      type : 'ADD_TO_BASKET',
      item:{
        
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={AddToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
