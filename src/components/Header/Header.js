import logo from "../../images/Logo.svg";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import UserMenu from "../UserMenu/UserMenu";
import LoginMenu from "../LoginMenu/LoginMenu";

function Header(props) {
    return (
      <header className="header">
        <NavLink className="header__link" to="/">
            <img className="header__logo"
                src={logo}
                alt="WTWR logo"
            />
        </NavLink>
        <div className="header__date-place">
            {props.currentDate}, {props.locationName}
        </div>
        <ToggleSwitch
            icon-left="F"
            icon-right="C"
        />
        { props.isLoggedIn ?
            <UserMenu
                openModalHandler={props.openModalHandler}
                currentUser={props.currentUser}
            /> :
            <LoginMenu openModalHandler={props.openModalHandler}/>
        }
      </header>
    );
  }
  
  export default Header;
  