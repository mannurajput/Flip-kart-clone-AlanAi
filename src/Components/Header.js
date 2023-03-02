import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./../StyleSheet/Header.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import More from "./More";
import Login from "./Login";
const Header = () => {
  return (
    <div className="header">
      <div className="first">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="logo"
        ></img>

        <div className="f1">
          <span
            style={{
              fontSize: "11px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Explore
          </span>
          <span
            style={{
              fontSize: "11px",
              color: "yellow",
              fontStyle: "italic",
            }}
          >
            Plus
          </span>
          <span>
            <img
              width="10"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
            />
          </span>
        </div>
      </div>
      <div className="second">
        <input
          type="text"
          placeholder="Search product,brands and more"
          id="text"
        ></input>
        <SearchIcon />
      </div>
      <div className="three">
        <Tippy
          theme="light"
          content={<Login />}
          interactive={true}
          offset={[5, 15]}
        >
          <button>Login</button>
        </Tippy>
      </div>
      <div className="four">
        <span>More</span>

        <Tippy
          content={<More />}
          interactive={true}
          theme="light"
          offset={[5, 15]}
        >
          <ExpandMoreIcon />
        </Tippy>
      </div>
      <div className="five">
        <ShoppingCartIcon />
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Header;
