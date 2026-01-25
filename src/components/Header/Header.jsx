import "./Header.css";

const Header = () => {
  return (
    <header className="header">

      {/* Left */}
      <div className="header-left">
        <div className="company-name">Deep Computer</div>
        <div className="company-phone">📞 8558-09-1100</div>
      </div>

      {/* Center */}
      <nav className="header-center">
        <a className="home-link" href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Login</a>
        <a href="#">Contact</a>
      </nav>

      {/* Right */}
      <div className="header-right">
        ਦੀਪ ਕੰਪਿਊਟਰ
      </div>

    </header>
  );
};

export default Header;
