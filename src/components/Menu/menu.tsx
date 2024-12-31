import "./menu.css";

const Menu = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="menu-container">
      <ul className="menu-list">
        <li className="menu-item" style={{ "--i": 6 } as React.CSSProperties}>
          <a
            onClick={(e) => scrollToSection(e, "#name")}
            href="#name"
            className="menu-link"
          >
            Name
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 5 } as React.CSSProperties}>
          <a
            onClick={(e) => scrollToSection(e, "#profile")}
            href="#profile"
            className="menu-link"
          >
            Object
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 4 } as React.CSSProperties}>
          <a
            onClick={(e) => scrollToSection(e, "#skills")}
            href="#skills"
            className="menu-link"
          >
            Skills
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 3 } as React.CSSProperties}>
          <a
            onClick={(e) => scrollToSection(e, "#projects")}
            href="#projects"
            className="menu-link"
          >
            Projects
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 2 } as React.CSSProperties}>
          <a
            onClick={(e) => scrollToSection(e, "#contact")}
            href="#contact"
            className="menu-link"
          >
            Contact
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 1 } as React.CSSProperties}>
          <a
            onClick={(e) => scrollToSection(e, "#social")}
            href="#social"
            className="menu-link"
          >
            Social
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
