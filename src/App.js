import React, { useState } from "react";

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [];

function App() {
  const [items, setItems] = useState();
  const [cardOppened, setCardOppened] = useState(false);

  fetch("https://62b9bad1ff109cd1dc99a1c2.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
    });

  return (
    <div className="wrapper clear">
      {cardOppened && (
        <Drawer
          onClose={() => {
            setCardOppened(false);
          }}
        />
      )}
      <Header
        onClickCard={() => {
          setCardOppened(true);
        }}
      />

      <div className="content  p-40">
        <div className="d-flex aligin-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex  flex-wrap">
          {arr.map((obj) => (
            <Card
              title={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFevourite={() => console.log("fevorite")}
              onPlus={() => console.log("plus")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
