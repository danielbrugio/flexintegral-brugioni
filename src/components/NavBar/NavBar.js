import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import { CartIcon } from "../CartIcon/CartIcon";
import { NavLink } from "react-router-dom";


const NavBar = () => {


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
            <NavLink to={'/'} className="links">
              Home
            </NavLink>
            <NavLink to={'/category/notebooks'} className="links" >
              Notebooks
            </NavLink>
            <NavLink to={'/category/martphones'} className="links" >
              Smartphones
            </NavLink>
            <NavLink to={'/category/tablets'} className="links" >
              Tablets
            </NavLink>
            <NavLink to={'/category/tv'} className="links" >
              TV
            </NavLink>
            
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
