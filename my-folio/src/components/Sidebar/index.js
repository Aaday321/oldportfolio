import './index.scss'
import logoText from './../../assets/images/logo_sub.png';
import logo from './../../assets/images/logo-s.png'
import { Link, NavLink } from 'react-router-dom';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () =>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logo} alt="logo"/>
            <img className="sub-logo" src={logoText} alt='logo text' />
        </Link>
        <nav className='nav-nav'>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" 
            className="about-link"
            activeclassname="active" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" 
            className="contact-link"
            activeclassname="active" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
    </div>
)

export default Sidebar;