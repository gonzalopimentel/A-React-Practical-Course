import React from "react";

import "../assets/styles/components/Footer.scss";

const a1 = "Use terms";
const a2 = "Privacy Declaration";
const a3 = "Help Center";

const Footer = () => (
  <footer className="footer">
    <a href="/">{a1}</a>
    <a href="/">{a2}</a>
    <a href="/">{a3}</a>
  </footer>
);

export default Footer;
