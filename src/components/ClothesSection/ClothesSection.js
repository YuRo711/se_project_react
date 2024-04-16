import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection(props) {
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
              .filter((card) => card.owner === props.currentUser._id)
              .map((card, i) => (
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
  );
}

export default ClothesSection;