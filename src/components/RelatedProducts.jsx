import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0 && category) {
      let productsCopy = products.slice();
      console.log("Category:", category);

      productsCopy = productsCopy.filter((item) => item.category === category);

      setRelated(productsCopy);
    } else {
      console.log("Category is missing");
    }
  }, [products, category]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.length > 0 ? (
          related.map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              bestseller={item.bestseller}
              category={item.category}
              description={item.description}
            />
          ))
        ) : (
          <p>No related products found</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
