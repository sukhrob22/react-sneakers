function App() {
  return (
    <div className="wrapper clear">
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
            <img width={18} height={18} src=" /img/Group.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src=" /img/Union.svg" />
          </li>
        </ul>
      </header>
      <div className="content  p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex ">
          <div className="card">
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
