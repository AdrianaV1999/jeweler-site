import React from "react";
import { Link } from "react-router-dom";
import logo from "../pics/Jeweler.png";

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img src={logo} className="mb-5 w-35" alt="" />
        <p className="w-full md:w-2/3 text-gray-600">
          We offer you exquisite, handcrafted jewelry that embodies precision,
          elegance, and timeless beauty in every detail. Each piece is
          thoughtfully designed and meticulously crafted to reflect
          sophistication and individuality. Our jewelry is created to inspire
          and elevate your style.
        </p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/collection">
            <li>Collection</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+12-000-000-0000</li>
          <li>support@jeweler.com</li>
          <li>partnerships@jeweler.com</li>
          <li>123 Jewelry Street, New York, NY</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
