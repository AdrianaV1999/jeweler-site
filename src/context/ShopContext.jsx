import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../pics/1.jpg";
import image2 from "../pics/2.jpg";
import image3 from "../pics/3.jpg";
import image4 from "../pics/4.jpg";
import image5 from "../pics/5.jpg";
import image6 from "../pics/6.jpg";
import image7 from "../pics/7.jpg";
import image8 from "../pics/8.jpg";
import image9 from "../pics/9.jpg";
import image10 from "../pics/10.jpg";
import image11 from "../pics/11.jpg";
import image12 from "../pics/12.jpg";
import image13 from "../pics/13.jpg";
import image14 from "../pics/14.jpg";
import image15 from "../pics/15.jpg";
import image16 from "../pics/16.jpg";
import image17 from "../pics/17.jpg";
import image18 from "../pics/18.jpg";
import image19 from "../pics/19.jpg";
import image20 from "../pics/20.jpg";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();
  const addToCart = async (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
    console.log(cartData);
  };

  const products = [
    {
      id: 1,
      name: "Gold Necklace",
      price: 150,
      image: image1,
      quantity: 1,
      bestseller: false,
      category: "Gold",
      description:
        "A Gold Necklace is a timeless piece of jewelry that exudes elegance and sophistication. Crafted from high-quality gold, it adds a touch of luxury to any outfit, making it perfect for both everyday wear and special occasions. Whether worn alone for a minimalist look or layered with other necklaces for a trendy style, a gold necklace is a versatile accessory that never goes out of fashion.",
      subCategory: "Necklaces",
    },
    {
      id: 2,
      name: "Pink Gold Ring",
      price: 250,
      image: image2,
      quantity: 1,
      bestseller: true,
      category: "Pink Gold",
      description:
        "A Pink Gold Ring is a delicate and stylish piece of jewelry that blends the elegance of gold with a soft, romantic pink hue. Made from rose gold, it offers a warm and feminine touch, making it a perfect choice for everyday wear or special occasions. Whether adorned with gemstones or kept simple, a pink gold ring adds a unique charm to any jewelry collection.",
      subCategory: "Rings",
    },
    {
      id: 3,
      name: "Silver Earrings",
      price: 80,
      image: image3,
      quantity: 1,
      bestseller: false,
      category: "Silver",
      description:
        "Silver Earrings are a classic and versatile accessory that adds a touch of elegance to any look. Crafted from high-quality silver, they offer a sleek and timeless appeal, making them perfect for both casual wear and formal occasions. Whether in the form of studs, hoops, or dangle designs, silver earrings effortlessly complement any style with their refined and sophisticated charm.",
      subCategory: "Earrings",
    },
    {
      id: 4,
      name: "Rose Gold Earrings",
      price: 500,
      image: image4,
      quantity: 1,
      bestseller: true,
      category: "Rose Gold",
      description:
        "Rose Gold Earrings are a stylish and elegant accessory that combines the warmth of gold with a soft, romantic pink hue. Their delicate color adds a touch of sophistication, making them perfect for both everyday wear and special occasions. Whether in the form of hoops, studs, or dangling designs, rose gold earrings bring a timeless charm and modern elegance to any jewelry collection.",
      subCategory: "Earrings",
    },
    {
      id: 5,
      name: "White Gold Pin Bracelet",
      price: 350,
      image: image5,
      quantity: 1,
      bestseller: true,
      category: "White Gold",
      description:
        "A White Gold Pin Bracelet is a sleek and sophisticated accessory that combines the brilliance of white gold with a unique pin-inspired design. Its modern yet timeless appeal makes it a versatile piece, perfect for both casual and formal occasions. Whether worn alone for a minimalist look or stacked with other bracelets, this elegant piece adds a refined touch to any outfit.",
      subCategory: "Bracelets",
    },
    {
      id: 6,
      name: "Large Gold Pin Earrings",
      price: 350,
      image: image6,
      quantity: 1,
      bestseller: false,
      category: "Gold",
      description:
        "Large Gold Pin Earrings are bold and stylish accessories that blend modern design with timeless elegance. Featuring a unique pin-inspired shape, these earrings make a statement while maintaining a sleek and sophisticated look. Crafted from high-quality gold, they add a touch of luxury to any outfit, making them perfect for both casual and formal occasions.",
      subCategory: "Earrings",
    },
    {
      id: 7,
      name: "Silver Earrings",
      price: 350,
      image: image7,
      quantity: 1,
      bestseller: true,
      category: "Silver",
      description:
        "Silver Earrings are a timeless and versatile accessory that adds a touch of elegance to any outfit. Made from high-quality silver, they offer a sleek, sophisticated look that's perfect for both everyday wear and special occasions. Whether in classic studs, hoops, or intricate designs, silver earrings provide a refined finish to any style, making them a must-have in any jewelry collection.",
      subCategory: "Earrings",
    },
    {
      id: 8,
      name: "Rose Gold Labyrinth Necklace",
      price: 350,
      image: image8,
      quantity: 1,
      bestseller: true,
      category: "Rose Gold",
      description:
        "The Rose Gold Labyrinth Necklace is a stunning piece that combines the elegance of rose gold with a captivating labyrinth design. Its intricate pattern symbolizes complexity and mystery, making it a unique statement accessory. Perfect for both everyday wear and special occasions, this necklace adds a touch of sophistication and modern charm to any outfit, offering a subtle yet stylish way to stand out.",
      subCategory: "Necklaces",
    },
    {
      id: 9,
      name: "Silver Hanging Ring",
      price: 350,
      image: image9,
      quantity: 1,
      bestseller: true,
      category: "Silver",
      description:
        "The Silver Hanging Ring is a chic and minimalist piece of jewelry that combines the sleekness of silver with a modern hanging design. Its simple yet elegant structure makes it a versatile accessory, perfect for both casual and formal occasions. Whether worn alone or paired with other pieces, this ring adds a refined, stylish touch to any outfit, making it a timeless addition to any jewelry collection.",
      subCategory: "Rings",
    },
    {
      id: 10,
      name: "White Gold Bracelet",
      price: 350,
      image: image10,
      quantity: 1,
      bestseller: false,
      category: "White Gold",
      description:
        "A White Gold Bracelet is an elegant and timeless piece of jewelry that exudes sophistication. Crafted from high-quality white gold, it offers a sleek, modern look while maintaining a classic appeal. Its versatile design makes it perfect for both everyday wear and special occasions. Whether adorned with diamonds, gemstones, or kept simple, a white gold bracelet adds a refined touch to any outfit, making it an essential accessory for any jewelry collection.",
      subCategory: "Bracelets",
    },
    {
      id: 11,
      name: "Pink Gold Ring",
      price: 350,
      image: image11,
      quantity: 1,
      bestseller: false,
      category: "Pink Gold",
      description:
        "A Pink Gold Ring is a stunning and romantic piece of jewelry that combines the warmth of gold with a soft, rosy hue. Its delicate and feminine design makes it a perfect choice for both special occasions and everyday wear. Whether it's a simple band or adorned with gemstones, a pink gold ring adds a subtle yet elegant touch to any hand, making it a timeless addition to any jewelry collection.",
      subCategory: "Rings",
    },
    {
      id: 12,
      name: "Silver Ring",
      price: 350,
      image: image12,
      quantity: 1,
      bestseller: true,
      category: "Silver",
      description:
        "A Silver Ring is a timeless and versatile piece of jewelry that adds a sleek and elegant touch to any look. Made from high-quality silver, it offers a sophisticated yet minimalist design, perfect for both casual wear and formal occasions. Whether a simple band, an intricate design, or adorned with gemstones, a silver ring is a classic accessory that complements any style and makes a lasting impression.",
      subCategory: "Rings",
    },
    {
      id: 13,
      name: "Pink Elegant Ring",
      price: 350,
      image: image13,
      quantity: 1,
      bestseller: true,
      category: "Pink Gold",
      description:
        "A Pink Elegant Ring is a sophisticated piece of jewelry that blends the softness of pink hues with a refined design. Whether crafted from pink gold, rose quartz, or featuring pink gemstones, this ring exudes femininity and grace. Its elegant design makes it perfect for special occasions or adding a touch of luxury to everyday wear. A pink elegant ring is the perfect accessory for those who want to make a subtle yet stunning statement.",
      subCategory: "Rings",
    },
    {
      id: 14,
      name: "Luxury Gold Necklace",
      price: 150,
      image: image14,
      quantity: 1,
      bestseller: false,
      category: "Gold",
      description:
        "A Luxury Gold Necklace is an exquisite piece of jewelry that radiates sophistication and timeless elegance. Crafted from high-quality gold, it is often adorned with precious gemstones or intricate designs, making it a standout accessory for any occasion. Whether worn to elevate a formal outfit or add a touch of opulence to everyday wear, a luxury gold necklace is a symbol of refinement and class, making it a perfect addition to any jewelry collection.",
      subCategory: "Necklaces",
    },
    {
      id: 15,
      name: "Luxury Gold Ring",
      price: 150,
      image: image15,
      quantity: 1,
      bestseller: false,
      category: "Gold",
      description:
        "A Luxury Gold Ring is a stunning symbol of elegance and sophistication. Crafted from high-quality gold, this ring often features intricate designs and is sometimes adorned with diamonds or other precious gemstones, making it a true statement piece. Whether worn for special occasions or as an everyday luxury, a luxury gold ring adds a touch of opulence and refinement to any outfit, embodying both timeless beauty and modern glamour.",
      subCategory: "Rings",
    },
    {
      id: 16,
      name: "Plain Silver Pin Bracelet",
      price: 150,
      image: image16,
      quantity: 1,
      bestseller: false,
      category: "Silver",
      description:
        "A Plain Silver Pin Bracelet is a minimalist yet elegant accessory that combines the sleek shine of silver with a simple, pin-inspired design. Its understated charm makes it versatile, perfect for both casual and formal occasions. Whether worn alone for a subtle look or layered with other bracelets, this silver pin bracelet adds a refined touch to any outfit, making it a timeless piece for any jewelry collection.",
      subCategory: "Bracelets",
    },
    {
      id: 17,
      name: "Pink Gold Earrings",
      price: 150,
      image: image17,
      quantity: 1,
      bestseller: false,
      category: "Pink Gold",
      description:
        "Pink Gold Earrings are a beautifully feminine accessory that combines the warmth of gold with a soft, rosy hue. These earrings add a touch of elegance and charm to any outfit, whether in delicate studs, hoops, or more intricate designs. The unique pink gold tone offers a modern twist on classic gold jewelry, making them perfect for both everyday wear and special occasions.",
      subCategory: "Earrings",
    },
    {
      id: 18,
      name: "Silver Necklace",
      price: 150,
      image: image18,
      quantity: 1,
      bestseller: false,
      category: "Silver",
      description:
        "A Silver Necklace is a versatile and timeless piece of jewelry that adds a touch of elegance to any look. Crafted from high-quality silver, it offers a sleek and refined design, perfect for both casual and formal occasions. Whether it's a simple chain, a statement pendant, or an intricate design, a silver necklace complements a wide range of styles and is a must-have addition to any jewelry collection.",
      subCategory: "Necklaces",
    },
    {
      id: 19,
      name: "Beautiful White Gold Necklace",
      price: 150,
      image: image19,
      quantity: 1,
      bestseller: false,
      category: "White Gold",
      description:
        "A Beautiful White Gold Necklace is a luxurious and elegant piece that combines the sleek shine of white gold with a sophisticated design. Whether featuring diamonds, gemstones, or a simple, polished finish, this necklace adds a timeless charm to any outfit. Its versatile style makes it perfect for both everyday wear and special occasions, offering a refined, modern touch to any jewelry collection.",
      subCategory: "Necklaces",
    },
    {
      id: 20,
      name: "Gold Necklace",
      price: 150,
      image: image20,
      quantity: 1,
      bestseller: false,
      category: "Gold",
      description:
        "A Gold Necklace is a classic and elegant piece of jewelry that adds a touch of sophistication to any ensemble. Crafted from high-quality gold, it shines with a warm, radiant glow, making it suitable for both everyday wear and special occasions. Whether simple and delicate or bold and statement-making, a gold necklace is a timeless accessory that enhances any outfit with its luxurious appeal.",
      subCategory: "Necklaces",
    },
  ];
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      totalCount += cartItems[itemId];
    }
    return totalCount;
  };
  const updateQuantity = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find(
        (product) => product.id === Number(itemId)
      );
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[itemId];
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
