import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import { CartIcon } from "../CartIcon/CartIcon";


const NavBar = () => {

  const handleSmartphone = () => {
    console.log('Smartphone')
  }

  const handleTablet = () => {
    console.log('Tablet')
  }

  const handleNotebook = () => {
    console.log('Notebook')
  }

  const handleTV = () => {
    console.log('TV')
  }

  return (
    <Navbar className="navBar" expand="sm">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Samsung" className="logo" />
        </Navbar.Brand>
      </Container>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navBar__list">
            <Nav.Link className="links" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="links" onClick={handleNotebook}>
              Notebooks
            </Nav.Link>
            <Nav.Link className="links" onClick={handleSmartphone}>
              Smartphones
            </Nav.Link>
            <Nav.Link className="links" onClick={handleTablet}>
              Tablets
            </Nav.Link>
            <Nav.Link className="links" onClick={handleTV}>
              TV
            </Nav.Link>
            <Nav.Link to="/ItemDetailContainer" className="links">
              <CartIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
