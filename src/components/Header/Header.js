import logo from "../../images/Logo.svg";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header(props) {
	const currentUser = useContext(CurrentUserContext);

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
            (
                <div className="header__user-menu">
                    <button 
                            className="header__button"
                            onClick={() => { 
                                    props.openModalHandler("add");
                            }}
                    >
                            + Add clothes
                    </button>
                    
                    <NavLink className="header__link" to="/profile">
                        <div className="header__user">
                            <p className="header__user-name">
                                {currentUser.name}
                            </p>
                            <img className="header__user-avatar"
                                src={currentUser.avatar}
                                alt={currentUser.name[0]}
                            ></img>
                        </div>
                    </NavLink>
                </div>
            ) :
            (
                <div className="header__login-menu">
                    <button className="header__button"
                    onClick={() => { 
                            props.openModalHandler("signup");
                    }}>
                        Sign Up
                    </button>
                    
                    <button className="header__button"
                    onClick={() => { 
                            props.openModalHandler("login");
                    }}>
                        Log in
                    </button>
                </div>
            )
        }
      </header>
    );
  }
  
  export default Header;
  