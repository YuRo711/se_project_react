import logo from "../../images/Logo.svg";
import avatar from "../../images/avatar.svg";

function Header(props) {
    const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  
    return (
      <div className="Header">
        <img className="Header__logo"
            src={logo}
            alt="WTWR logo"
        ></img>
        <div className="Header__date-place">
            {currentDate}, {props.locationName}
        </div>
        <button className="Header__add-button">
            + Add clothes
        </button>
        <div className="Header__user">
            <div className="Header__user-name">Terrence Tegegne</div>
            <img className="Header__user-avatar"
                src={avatar}
                alt="user avatar"
            ></img>
        </div>
      </div>
    );
  }
  
  export default Header;
  