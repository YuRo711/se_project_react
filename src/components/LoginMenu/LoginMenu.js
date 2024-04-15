function LoginMenu(props) {
	return (
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
	);
}

export default LoginMenu;
