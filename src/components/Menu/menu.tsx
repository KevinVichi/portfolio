import "./menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <ul className="menu-list">
        <li className="menu-item" style={{ "--i": 6 } as React.CSSProperties}>
          <a href="#" className="menu-link">
            Home
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 5 } as React.CSSProperties}>
          <a href="#" className="menu-link">
            About
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 4 } as React.CSSProperties}>
          <a href="#" className="menu-link">
            Services
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 3 } as React.CSSProperties}>
          <a href="#" className="menu-link">
            Portfolio
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 2 } as React.CSSProperties}>
          <a href="#" className="menu-link">
            Our Team
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 1 } as React.CSSProperties}>
          <a href="#" className="menu-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
