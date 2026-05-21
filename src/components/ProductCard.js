function ProductCard(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        width: "250px",
      }}
    >
      <h2>{props.title}</h2>

      <p>
        <b>Ціна:</b> {props.price} грн
      </p>

      <p>
        <b>Категорія:</b> {props.category}
      </p>
    </div>
  );
}

export default ProductCard;