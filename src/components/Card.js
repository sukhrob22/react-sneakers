import React from "react";

export const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/love.svg" alt="love" />
      </div>
      <img width={133} height={112} src="/img/image5.jpg" alt="" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="" alt="" />
        </button>
      </div>
    </div>
  );
};
