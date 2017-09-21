import React from "react";
import SocialIcon from "./SocialIcon";

const SocialNav = ({ styles }) => {
  return (
    <div className="social-helper">
      <nav className="social">
        <ul>
          <SocialIcon
            className="fa fa-facebook-official fa-2x"
            to="https://www.facebook.com/matias.lappalainen98"
            styles={styles}
          />
          <SocialIcon
            className="fa fa-github fa-2x"
            to="https://github.com/Maziss"
            styles={styles}
          />
          <SocialIcon
            className="fa fa-twitter fa-2x"
            to="https://twitter.com/mazis11"
            styles={styles}
          />
          <SocialIcon
            className="fa fa-instagram fa-2x"
            to="https://www.instagram.com/mazissss/"
            styles={styles}
          />
        </ul>
      </nav>
    </div>
  );
};

export default SocialNav;
