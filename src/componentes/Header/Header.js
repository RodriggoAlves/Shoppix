import Logo from "../Logo/Logo.js";
import Menu from "../Menu/Menu.js";
import './Header.css'

function Header ( ) {
    
    return (
        <div className="Header">
            <Logo/>
            <Menu/>
        </div>
    )
}

export default Header;