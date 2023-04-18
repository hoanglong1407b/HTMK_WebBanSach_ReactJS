import './Header.css';
import Navbar from './Navbar';
import Mid from './Mid';
import Bottom from './Bottom';

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