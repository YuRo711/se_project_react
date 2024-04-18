import { useContext } from "react";
import avatar from "../../images/avatar.svg";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__user">
          <img className="sidebar__user-avatar"
            src={currentUser.avatar}
            alt={currentUser.name[0]}
          ></img>
          <p className="sidebar__user-name">
            {currentUser.name}
          </p>
      </div>

      <button className="sidebar__button"
        onClick={() => { 
          props.openModalHandler("edit-user");
        }}
      >
        Change profile data
      </button>
      
      <button className="sidebar__button"
        onClick={props.logout}
      >
        Log out
      </button>
    </div>
  );
}

export default SideBar;