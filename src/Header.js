import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { isAuth, signout } from "./utils/helpers";
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Header() {
  const [{ basket }] = useStateValue();

  console.log(basket);

  let history = useHistory();
  const handleClick = () => {
    signout(() => {
      history.push("/");
      console.log("Trying to sign out");
    });
  }

  return (
    <nav className="header">
      {/*Logo on the left*/}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/*Search box*/}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* Four Links */}
      <div className="header__nav">
        {/* 1st Link */}
        {!isAuth() && (
          <>
            <Link to="/signin" className="header__link">
              <div className="header__option">
                <span className="header__optionLineOne">Hello User</span>
                <span className="header__optionLineTwo">Sign in</span>
              </div>
            </Link>
          </>
        )}
        {isAuth() && (
          <>
          <div className="header__option">
            <span
              className="header__signout"
              onClick={handleClick}
            >
              Sign out
            </span>
          </div>
          </>
        )}
        {/* 2nd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 4th Link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping basket icon */}
            <ShoppingBasketIcon />

            {/* Number of items in the basket */}
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>

      {/* Basket icon with number */}
    </nav>
  );
}

export default withRouter(Header);
