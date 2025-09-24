import { useContext } from "react";
import { context } from "./ContextProvider";

function Product({ image, title, price, id }) {
  const { dispatch } = useContext(context);

  return (
    <div className="product">
      <div className="content">
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="title">
          <h1>{title}</h1>
          <span>Rs: {price}</span>
        </div>
      </div>
      <button
        className="btn"
        onClick={(e) => {
          dispatch({ id: id, type: "add" });
          e.target.textContent = "Added to your Cart";
          setTimeout(() => {
            e.target.textContent = "Add to Cart";
          }, 2000);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
