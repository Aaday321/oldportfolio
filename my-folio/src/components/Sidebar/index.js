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
            <img src={logoText} alt='logo text' />
        </Link>
    </div>
)

export default Sidebar;