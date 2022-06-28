import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
// console.log(styles);

function Card(props) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  // useEffect(() => {
  //   console.log("Asslom aleykum");
  // }, [isAdded]);

  // console.log(props);
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFevourite}>
        <img src="/img/love.svg" alt="love" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="" />
      <h5>{props.title} </h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб. </b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/check.png" : "/img/plus.png"}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
