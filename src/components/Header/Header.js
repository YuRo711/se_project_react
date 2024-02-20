import logo from "../../images/Logo.svg";
import avatar from "../../images/avatar.svg";
import "./Header.css";

function Header(props) {
    return (
      <header className="header">
        <img className="header__logo"
            src={logo}
            alt="WTWR logo"
        ></img>
        <div className="header__date-place">
            {props.currentDate}, {props.locationName}
        </div>
        <button 
            className="header__add-button"
            onClick={() => { 
                props.openModalHandler("add");
             }}
        >
            + Add clothes
        </button>
        <div className="header__user">
            <p className="header__user-name">Terrence Tegegne</p>
            <img className="header__user-avatar"
                src={avatar}
                alt="user avatar"
            ></img>
        </div>
      </header>
    );
  }
  
  export default Header;
  