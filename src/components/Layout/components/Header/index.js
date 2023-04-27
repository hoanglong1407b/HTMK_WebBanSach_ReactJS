import './Header.css';
import Navbar from './Navbar';
import Mid from './Mid';
import Bottom from './Bottom';

import className from 'classnames/bind';
import style from './Header.module.scss';

const cx = className.bind(style);

function Header() {
   return ( 
        <header className="header">
            <Navbar/>
            <Mid/>
            <Bottom/>
        </header>
    );
}

export default Header;