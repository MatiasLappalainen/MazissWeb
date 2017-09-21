import React from "react";


const styles = {
  greeter: {
    fontSize: '100pt',
    color: 'white'
  },
  text: {
    color: 'white'
  },
  two: {
    fontWeight: 'strong'
  }
}

const LandingText = ({ textTwo, text }) => {
  return (
    <div className="landing-wrapper">
      <h1 style={styles.greeter}>Hello &amp; Welcome</h1>
      <h1 style={styles.text} className="landingText">
        {text}
      </h1>
      <hr />
      <h2 style={styles.text} className="landingText">
        {textTwo}
      </h2>
    </div>
  );
};

export default LandingText;