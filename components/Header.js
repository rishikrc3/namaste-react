const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxodBCOx28Vb76OItsEulidWkalURaNu3sMw&usqp=CAU"
          alt="Not loading"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
