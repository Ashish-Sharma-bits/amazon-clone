import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/81qDhAQH-vL._SX3000_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id={1}
            title="Up to 50% off | Alexa & Fire TV devices"
            price={12.5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Jupiter-21/phase3/1x_All-devices-tile-4-min._SY116_CB639196555_.jpg"
            rating={3}
          />
          <Product
            id={2}
            title="Up to 40% off | Mobiles & accessories"
            price={66.5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/cnnjpp/DesktopGateway_CategoryCard_379X304._SY304_CB639629275_.jpg"
            rating={1}
          />
          <Product
            id={3}
            title="Up to 80% off + Extra ₹300 Cashback | Women"
            price={10.5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/Jupiter_21/Phase3/186-116/WF-6.2._SY116_CB639119115_.jpg"
            rating={2}
          />
        </div>
        <div className="home_row">
          <Product
            id={4}
            title="Up to 80% off + Extra ₹300 Cashback | Men's"
            price={29.9}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/Jupiter_21/Phase3/186-116/MF-4.2._SY116_CB639118804_.jpg"
            rating={3}
          />
          <Product
            id={5}
            title="Up to 65% off | TVs & appliances"
            price={122}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Jupiter21/LATV/MSO/cc_379X304LATV._SY304_CB639514026_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id={6}
            title="Blockbuster Deals"
            price={123.5}
            image="https://m.media-amazon.com/images/I/51kMzJjPU+L._AC_SY200_.jpg"
            rating={3}
          />
          <Product
            id={7}
            title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel"
            price={11.99}
            image="https://m.media-amazon.com/images/I/81ZB62prn-L._AC_SY200_.jpg"
            rating={2}
          />
          <Product
            id={7}
            title="AOC C32G2ZE 32'' Curved Frameless Gaming Monitor, Full HD 1920x1080, VA, 0.5ms 240Hz, AMD "
            price={100}
            image="https://m.media-amazon.com/images/I/41HY2Yw3xFS.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
