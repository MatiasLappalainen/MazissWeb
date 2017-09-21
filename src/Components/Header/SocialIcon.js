import React from "react";
import PropTypes from 'prop-types'



const SocialIcon = ({ styles, className, to }) => {
  return (
    <li>
      <a
        rel="noopener noreferrer"
        style={styles}
        className="socialIcon"
        href={to}
        target="_blank"
      >
        <i className={className} />
      </a>
    </li>
  );
};

export default SocialIcon;

SocialIcon.PropTypes = {
  styles: PropTypes.array,
  className: PropTypes.string,
  to: PropTypes.string
}