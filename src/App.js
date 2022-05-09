function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <div className="items">
            <h2 className="mb-30">Корзина</h2>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/image5.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-xx.svg" alt="btn-x" />
            </div>

            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: "url(/img/image5.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-xx.svg" alt="btn-x" />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого: </span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ</button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40 ">
        <div className="d-flex align-center">
          <img className="mr-15" width={40} height={40} src=" /img/logo.png" />
          <div className="headerInfo">
            <h3 className="text-uppercase">Rect Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img
              width={18}
              height={18}
              src=" /img/Group.svg"
              className="mr-20"
            />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src=" /img/Union.svg" />
          </li>
        </ul>
      </header>
      <div className="content  p-40">
        <div className="d-flex aligin-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex ">
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

          <div className="card">
            <img width={133} height={112} src="/img/image6.jpg" alt="" />
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

          <div className="card">
            <img width={133} height={112} src="/img/image7.jpg" alt="" />
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

          <div className="card">
            <img width={133} height={112} src="/img/image8.jpg" alt="" />
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
        </div>
      </div>
    </div>
  );
}

export default App;
