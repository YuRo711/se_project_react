import "./ItemCard.css";

function ItemCard(props) {
    const data = props.data;
    if (!data)
        return;
    
    return (
      <div className="ItemCard" 
        onClick={() => {
          props.openModalHandler("item");
          props.setItemModalInfo(data);
      }}>
        <img className="ItemCard__image"
            src={data.imageUrl}
            alt={data.name}
        ></img>
        <div className="ItemCard__name">{data.name}</div>
      </div>
    );
  }
  
  export default ItemCard;
  