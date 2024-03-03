import ItemCard from "../ItemCard/ItemCard";
import avatar from "../../images/avatar.svg";

function Profile(props) {
  return (
    <main className="profile">
      <div className="profile__sidebar">
        <div className="profile__user">
          <img className="profile__user-avatar"
              src={avatar}
              alt="user avatar"
          ></img>
          <p className="profile__user-name">Terrence Tegegne</p>
        </div>
      </div>
      <div className="profile__clothes">
        <div className="profile__clothes-header">
          <h1 className="profile__clothes-title">Your items</h1>
          <button 
              className="profile__add-button"
              onClick={() => { 
                  props.openModalHandler("add");
              }}
          >
            + Add new
          </button>
        </div>
        <div className="profile__cards">
          {
            props.cards.map((card, i) => (
              <ItemCard
                key={card._id}
                data={card}
                openModalHandler={props.openModalHandler}
                setItemModalInfo={props.setItemModalInfo}
              />
            ))
          }
        </div>
      </div>
    </main>
  );
}

export default Profile;