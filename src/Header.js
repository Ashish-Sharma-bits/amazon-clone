import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/world-brand-amazon-png-logo-vector-27.png"
          alt="logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
        {/*icon not showin */}
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">hello guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">& Offers</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">hello guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingCartIcon className="header_basket_logo" />
            <span className="header_optionLineTwo basket_count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
