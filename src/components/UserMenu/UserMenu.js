import { useContext } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function UserMenu(props) {
	const currentUser = useContext(CurrentUserContext);

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
	);
}

export default UserMenu;
