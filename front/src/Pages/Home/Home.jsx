import React, { useEffect, useState } from "react";
import { products } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/CardItem/Card";
import { Navbar } from "../../components/NavBar/Navbar";
import s from "./styles/Home.module.css";

export const Home = () => {
  const [cartItems, setcartItems] = useState([]);
  const dispatch = useDispatch();
  const allproducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(products());
  }, [dispatch]);

  useEffect(() => {
    console.log("Cartitems", cartItems);
  }, [cartItems])
  

  const handleAddToCart = (clickedItem) => {
    setcartItems(prev => {
      //1. Is the item already added in the carr?
      const isItemInCart = prev.find((item) => item._id === clickedItem._id);
      console.log("isItemInCart", isItemInCart);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      //First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setcartItems(prev => (
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            return ack
          }
          return [...ack, { ...item, amount: item.amount - 1 }]
        } else {
          return [...ack, item]
        }
      }, [])
    ))
  };

  return (
    <main>
      <Navbar handleRemoveFromCart = {handleRemoveFromCart} cartItems={cartItems} />
      <div className={s.gripcards}>
        {allproducts?.map((product) => (
          <Card
            key={Math.random()}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </main>
  );
};
