import { useContext } from "react";
import { context } from "./ContextProvider";

function Shopping({ image, title, price, id, quantity }) {
  const { dispatch } = useContext(context);

  return (
    <div className="list">
      <div className="info">
        <img src={image} alt={title} />
        <h1 className="product-title">{title}</h1>
      </div>
      <div className="shopping-content">
        <div className="quantity">
          <button onClick={() => dispatch({ type: "decrease", id })}>-</button>
          <span>{quantity}</span>
          <button onClick={() => dispatch({ type: "increase", id })}>+</button>
        </div>
        <h3>RS: {price}</h3>
        <button
          className="remove"
          onClick={() => dispatch({ type: "remove", id })}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Shopping;
