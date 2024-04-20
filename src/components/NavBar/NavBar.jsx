import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import CardLogo from '../../assets/CardLogo.png';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/">
                <img src={ CardLogo } alt="CardLogo" className="navbar-logo" />
            </Link>
            <div className="navbar-right">
                <p className="navbar-user">Welcome, {user.name}</p>
                <Link to="" onClick={handleLogOut} className="navbar-link">Log Out</Link>
            </div>
        </div>
    </nav>
  );
}