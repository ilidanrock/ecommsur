import React, { useEffect, useState } from "react";
import { products } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/CardItem/Card";
import { Navbar } from "../../components/NavBar/Navbar";
import s from "./styles/Home.module.css";

export const Home = () => {
  const [cartItems, setcartItems] = useState(() => {
    try {
      let item = window.localStorage.getItem("cartItems");
      return item ? JSON.parse(item) : [];
    } catch (error) {
      return [];
    }
  });
  const dispatch = useDispatch();
  const allproducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(products());
    window.localStorage.setItem("cartItems", []);
  }, [dispatch]);
  
  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalItems = (items) =>
    items.reduce((ack, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem) => {
    setcartItems((prev) => {
      //1. Is the item already added in the carr?
      const isItemInCart = prev.find((item) => item._id === clickedItem._id);

      if (isItemInCart) {
        let current = prev.map((item) =>
          item._id === clickedItem._id
            ? {
                ...item,
                amount: item.amount + 1,
                countInStock: item.countInStock - 1,
              }
            : item
        );
        return current;
      }
      //First time the item is added
      let current = [
        ...prev,
        {
          ...clickedItem,
          amount: 1,
          countInStock: clickedItem.countInStock - 1,
        },
      ];
      window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return current;
    });
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const handleRemoveFromCart = (id) => {
    setcartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item._id === id) {
          if (item.amount === 1) {
            return ack;
          }
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const removeItemfromCart = (id) => {
    setcartItems((prev) => prev.filter((ele) => ele._id !== id));
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <main>
      <Navbar
        handleRemoveFromCart={handleRemoveFromCart}
        handleAddToCart={handleAddToCart}
        cartItems={cartItems}
        getTotalItems={getTotalItems}
        removeItemfromCart={removeItemfromCart}
      />
      <div className={s.gripcards}>
        {allproducts?.map((product) => (
          <Card
            key={Math.random()}
            product={product}
            handleAddToCart={handleAddToCart}
            cartItems={cartItems}
          />
        ))}
      </div>
    </main>
  );
};
