import avatar from "../../images/avatar.svg";
import "./SideBar.css";

function SideBar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar__user">
          <img className="sidebar__user-avatar"
            src={avatar}
            alt="user avatar"
          ></img>
          <p className="sidebar__user-name">Terrence Tegegne</p>
      </div>
    </div>
  );
}

export default SideBar;