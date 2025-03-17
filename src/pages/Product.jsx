import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <div key={i} className="cursor-pointer" onClick={() => handleClick(i)}>
          <FaStar
            className={`w-4 h-4 ${
              i <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        </div>
      );
    }
    return stars;
  };
  const fetchProductData = () => {
    const foundProduct = products.find((item) => item.id === Number(productId));
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 border-gray-200 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-hidden justify-between sm:justify-normal sm:w-[24%] w-full">
            {Array.isArray(productData.image) ? (
              productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt=""
                />
              ))
            ) : (
              <img
                src={productData.image}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            )}
          </div>
          <div className="w-full sm:w-[100%]">
            <img src={image} className="w-full sm:w-[100%]" alt="" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <div className="flex">
              <div className="flex mb-3">{renderStars()}</div>
            </div>
          </div>
          <p className="mt-3 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-4 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <button
            onClick={() => addToCart(productData.id)}
            className="mt-10 bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 border-gray-300"></hr>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-300 px-5 py-3 text-sm">Descrption</b>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce jewelry website is an online platform designed for the
            buying and selling of jewelry items such as rings, necklaces,
            bracelets, earrings, and watches. It serves as a digital marketplace
            where customers can browse through a wide variety of jewelry pieces,
            learn about their features, and complete purchases without visiting
            a physical store. Jewelry e-commerce websites have become
            increasingly popular due to their convenience, wide selection, and
            ability to cater to a global audience.
          </p>
          <p>
            Many platforms also provide customer reviews, ratings, and various
            customization options. Each product is often presented on its own
            dedicated page, providing all the essential information customers
            need to make informed purchasing decisions.
          </p>
        </div>
      </div>
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
