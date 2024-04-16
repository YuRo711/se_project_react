import avatar from "../../images/avatar.svg";
import "./SideBar.css";

function SideBar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar__user">
          <img className="sidebar__user-avatar"
            src={props.currentUser.avatar}
            alt={props.currentUser.name[0]}
          ></img>
          <p className="sidebar__user-name">
            {props.currentUser.name}
          </p>
      </div>
    </div>
  );
}

export default SideBar;