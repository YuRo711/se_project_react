function ItemCard(props) {
    const data = props.data;
    // For some reason, there's an extra card where data is undefined.
    // How do I deal with it?
    if (!data)
        return;

    return (
      <div className="ItemCard">
        <img className="ItemCard__image"
            src={data.link}
        ></img>
        <div className="ItemCard__name">{data.name}</div>
      </div>
    );
  }
  
  export default ItemCard;
  