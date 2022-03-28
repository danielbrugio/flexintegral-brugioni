import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import { CartIcon } from "../CartIcon/CartIcon";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, collection } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'






const NavBar = () => {
  const [categories, setCategories] = useState([])

 

  useEffect(() => {
    getDocs(collection(firestoreDb, 'categories')).then(response => {
      const categories = response.docs.map(cat => {
        return { id: cat.id, ...cat.data()}
      })
      setCategories(categories)
    })
}, [])
  


  return (
    <Navbar className="navBar" expand="sm">
      <Container>
        <NavLink to={'/'} >
          <img src={Logo} alt="Samsung" className="logo" />
        </NavLink>
      </Container>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navBar__list">
          {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className="links">{cat.description}</NavLink>)}
           
            <CartIcon />  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
