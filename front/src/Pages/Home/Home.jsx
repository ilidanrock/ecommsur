import React, { useEffect } from "react";
import { products } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/CardItem/Card";
import { Navbar } from "../../components/NavBar/Navbar";
import s from "./styles/Home.module.css";

export const Home = () => {
  //const [products, setProducts] = useState([])
  const dispatch = useDispatch();
  const allproducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(products());
  }, [dispatch]);

  console.log(allproducts);
  return (
    <main>
    <Navbar/>
    <div className={s.gripcards}>
      {allproducts?.map((product) => (
        <Card id={product.id} image={product.image} name={product.name} price={product.price} />
      ))}
    </div>
    </main>
  );
};
