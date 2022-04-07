import React, { useEffect } from "react";
import { productDetail } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import s1 from "./styles/Detail.module.css";

export const Detail = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.productDetail);
  const id = useParams().id;

  useEffect(() => {
    dispatch(productDetail(id));
  }, [dispatch, id]);

  return (
    <div className={s1.container}>
      {detail ? (
        <div className={s1.cardDetail}>
          <h1>{detail.name}</h1>
          <img
            src={`http://localhost:5000${detail.image}`}
            alt={`${detail.name}`}
          ></img>
          <h2>Descripcion:</h2>
          <div
            className={s1.descripcion}
            dangerouslySetInnerHTML={{ __html: detail.description }}
          />
          <h2>Rating : </h2> <p className={s1.rating}> {detail.rating}</p>
          <div>
            <h2>Reviews: </h2>
            <p>{detail.numReviews}</p>
          </div>
          <Link to="/Home">
            <button className={s1.refresh}>Volver</button>
          </Link>
        </div>
      ) : (
        <div className={s1.loading}>
          <h3>Loading</h3>
        </div>
      )}
    </div>
  );
};
