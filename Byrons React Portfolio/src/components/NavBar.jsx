import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <h1>Byron Tobe</h1>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>About Me</NavLink></li>
        <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;