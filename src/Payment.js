import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout(
          <Link to="/checkout">
            {basket?.length}
            items
          </Link>
          )
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Dilivery address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Sec-108, Noida</p>
            <p>201301, India</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items to be delivered</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_method">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
