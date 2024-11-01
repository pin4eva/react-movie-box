const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="logo">
          <img src="/src/assets/react.svg" alt="React Logo" />
        </div>

        <ul>
          <li>About</li>
          <li>Product</li>
          <li>Services</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
