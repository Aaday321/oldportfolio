import './index.scss'
import logo from './../../assets/images/logo_sub.png';
import { Link, NavLink } from 'react-router-dom';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () =>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logo} alt='logo' />
        </Link>
        
        <div className="nav-bar">
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-lnk" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </div>
    </div>
)

export default Sidebar;