import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link
      className="text-gray-700 cursor-pointer font-outfit"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm font-outfit">{name}</p>
      <p className="text-sm font-semibold font-outfit">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
