import logo from "../../images/Logo.svg";
import avatar from "../../images/avatar.svg";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

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
        <button 
            className="header__add-button"
            onClick={() => { 
                props.openModalHandler("add");
             }}
        >
            + Add clothes
        </button>
        <NavLink className="header__link" to="/profile">
            <div className="header__user">
                <p className="header__user-name">Terrence Tegegne</p>
                <img className="header__user-avatar"
                    src={avatar}
                    alt="user avatar"
                ></img>
            </div>
        </NavLink>
      </header>
    );
  }
  
  export default Header;
  