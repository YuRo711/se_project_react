import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

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
					<p className="header__user-name">
						{props.currentUser.name}
					</p>
					<img className="header__user-avatar"
						src={props.currentUser.avatar}
						alt={props.currentUser.name[0]}
					></img>
				</div>
			</NavLink>
		</div>
	);
}

export default UserMenu;
