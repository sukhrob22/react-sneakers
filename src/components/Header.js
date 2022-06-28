function Header(props) {
  // console.log(props);
  return (
    <header className="d-flex justify-between align-center p-40 ">
      <div className="d-flex align-center">
        <img className="mr-15" width={40} height={40} src=" /img/logo.png" />
        <div className="headerInfo">
          <h3 className="text-uppercase">Rect Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex ">
        <li onClick={props.onClickCard} className="mr-30 cu-p">
          <img width={18} height={18} src=" /img/Group.svg" className="mr-20" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src=" /img/Union.svg" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
