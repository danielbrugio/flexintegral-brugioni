/* import "./NavBar.css";
import Logo from "../assets/Logo.png";

const NavBar = () => {
  return (
    <nav className="navBar">
      <img src={Logo} alt="" />
      <div className="categories">
        <button className="option">Notebooks</button>
        <button className="option">Smartphones</button>
        <button className="option">Tablets</button>
        <button className="option">TV</button>
      </div>
    </nav>
  );
};

export default NavBar; */
import "./NavBar.css";

const { Navbar, Container, Nav } = require("react-bootstrap");
import Logo from "../assets/Logo.png";

const NavBar = () => {
  return (
    <Navbar className="navBar" expand="sm">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Samsung" />
        </Navbar.Brand>
      </Container>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navBar__list">
            <Nav.Link className="links" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="links" href="#notebooks">
              Notebooks
            </Nav.Link>
            <Nav.Link className="links" href="#smartphones">
              Smartphones
            </Nav.Link>
            <Nav.Link className="links" href="#tablets">
              Tablets
            </Nav.Link>
            <Nav.Link className="links" href="#tv">
              TV
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
