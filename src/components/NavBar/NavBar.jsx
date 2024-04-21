import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import CardLogo from '../../assets/CardLogo.png';
import { CgProfile } from "react-icons/cg";
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  const [showDropdown, setShowDropdown] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  function toggleDropdown() {
    setShowDropdown(prevState => !prevState);
  }

  function handleLinkClick() {
    setShowDropdown(false);
  }

  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/">
                <img src={ CardLogo } alt="CardLogo" className="navbar-logo" />
            </Link>
            <div className="dropdown" onClick={toggleDropdown}>
                <div className="navbar-right">
                    <div className="navbar-user">
                        <CgProfile className="user-name" />&nbsp;<p className="user-name">{user.name}</p>
                    </div>
                    {showDropdown && (
                        <div className="dropdown-content">
                            <Link to={`/cards/personal/${user._id}`} className="dropdown-item" onClick={handleLinkClick}>View Cards</Link>
                            <Link to="" onClick={handleLogOut} className="dropdown-item">Log Out</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </nav>
  );
}