import { useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard(props) {
  const currentUser = useContext(CurrentUserContext);
    const data = props.data;
    if (!data)
        return;

    let isLiked = data.likes.includes(currentUser._id);
    
    return (
      <div className="item-card" 
        onClick={() => {
          props.openModalHandler("item");
          props.setItemModalInfo(data);
      }}>
        <img className="item-card__image"
            src={data.imageUrl}
            alt={data.name}
        ></img>
        <div className="item-card__header">
          <p className="item-card__name">{data.name}</p>
          <button className={props.isLoggedIn ?
            `item-card__like${isLiked ? " item-card__like_liked" : ""}` :
            "item-card__like_hidden" }
            onClick={(e) => {
              e.stopPropagation();
              props.onCardLike(data._id, isLiked);
            }}/>
        </div>
      </div>
    );
  }
  
  export default ItemCard;
  