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
        <p className="ItemCard__name">{data.name}</p>
      </div>
    );
  }
  
  export default ItemCard;
  