import './NavBar.css';
import Logo from "../assets/Logo.png"

const NavBar = () => {
    
  return (
      <nav className="navBar">
        <img src={Logo} alt="" />
        <div className="categories">
          <button className="option">Notebooks</button>
          <button className='option'>Smartphones</button>
          <button className='option'>Tablets</button>
          <button className='option'>TV</button>
        </div>
      </nav>
  )
}

export default NavBar
