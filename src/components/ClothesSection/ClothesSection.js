import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ClothesSection(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="clothes">
        <div className="clothes-header">
          <h1 className="clothes-title">Your items</h1>
          <button 
              className="clothes__add-button"
              onClick={() => { 
                  props.openModalHandler("add");
              }}
          >
            + Add new
          </button>
        </div>
        <div className="clothes__cards">
          {
            props.cards
              .filter((card) => card.owner === currentUser._id)
              .map((card, i) => (
                <ItemCard
                  key={card._id}
                  data={card}
                  openModalHandler={props.openModalHandler}
                  setItemModalInfo={props.setItemModalInfo}
                  onCardLike={props.onCardLike}
                  isLoggedIn={props.isLoggedIn}
                />
              ))
          }
        </div>
      </div>
  );
}

export default ClothesSection;