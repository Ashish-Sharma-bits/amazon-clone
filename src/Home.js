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
            title="Up to 50% off | Alexa & Fire TV devices"
            price={29.9}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Jupiter-21/phase3/1x_All-devices-tile-4-min._SY116_CB639196555_.jpg"
            rating={3}
          />
          <Product
            title="Up to 40% off | Mobiles & accessories"
            price={29.9}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/cnnjpp/DesktopGateway_CategoryCard_379X304._SY304_CB639629275_.jpg"
            rating={3}
          />
          <Product
            title="Up to 80% off + Extra ₹300 Cashback | Women"
            price={29.9}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/Jupiter_21/Phase3/186-116/WF-6.2._SY116_CB639119115_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            title="Up to 80% off + Extra ₹300 Cashback | Men's"
            price={29.9}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/Jupiter_21/Phase3/186-116/MF-4.2._SY116_CB639118804_.jpg"
            rating={3}
          />
          <Product
            title="Up to 65% off | TVs & appliances"
            price={29.9}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Jupiter21/LATV/MSO/cc_379X304LATV._SY304_CB639514026_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            title="Blockbuster Deals"
            price={29.9}
            image="https://m.media-amazon.com/images/I/51kMzJjPU+L._AC_SY200_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
