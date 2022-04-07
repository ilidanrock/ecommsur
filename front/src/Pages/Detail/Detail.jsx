import React, { useEffect } from "react";
import { productDetail } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fc";
import * as FaIcons1 from "react-icons/bs";
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
          <div className={s1.icon}>
            <Link to="/">
              <FaIcons.FcDownLeft className={s1.refresh} />
            </Link>
          </div>
          <div className={s1.descriptionDetail}>
            <div>
              <h2>{detail.name}</h2>
              <img
                src={`http://localhost:5000${detail.image}`}
                alt={`${detail.name}`}
              />
            </div>
            <div className={s1.container2}>
              <div
                className={s1.description}
                dangerouslySetInnerHTML={{ __html: detail.description }}
              />
              <h3>Descripcion:</h3>
              <div className={s1.ratingReviews}>
                <div>
                  <FaIcons1.BsStar />
                  <h3>Rating : </h3>{" "}
                  <p className={s1.rating}> {detail.rating}</p>
                </div>
                <div>
                  <FaIcons1.BsEye />
                  <h3>Reviews: </h3>
                  <p>{detail.numReviews}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={s1.loading}>
          <h3>Loading</h3>
        </div>
      )}
    </div>
  );
};
