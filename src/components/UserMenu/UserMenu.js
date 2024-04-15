import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import avatar from "../../images/avatar.svg";

function UserMenu(props) {
	return (
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
					<p className="header__user-name">Terrence Tegegne</p>
					<img className="header__user-avatar"
						src={avatar}
						alt="user avatar"
					></img>
				</div>
			</NavLink>
		</div>
	);
}

export default UserMenu;
