import React from "react";
import "./../StyleSheet/Tipy.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="new">
        <h>New customer?</h>

        <div className="signup">
          <Link to="/Signup">
            {" "}
            <h> Signup</h>
          </Link>
        </div>
      </div>
      <hr />
      <div className="profile">
        <AccountCircleIcon />
        <h>My Profile</h>
      </div>
      <hr />
      <div className="pluszone">
        <StarPurple500Icon />
        <h>Flipkart Plus Zone</h>
      </div>
      <hr />
      <div className="order">
        <ConfirmationNumberIcon />
        <h>Order</h>
      </div>
      <hr />
      <div className="whislist">
        <FavoriteIcon />
        <h> whislist</h>
      </div>
      <hr />
      <div className="reward">
        <EmojiEventsIcon />
        <h>Rewards</h>
      </div>
      <hr />
      <div className="giftcard">
        <CardGiftcardIcon />
        <h>Giftcard</h>
      </div>
      <hr />
    </div>
  );
};

export default Login;
