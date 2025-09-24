import { useContext } from "react";
import { context } from "./ContextProvider";
import Shopping from "./Shopping";
import { createPortal } from "react-dom";

function Model() {
  const { state } = useContext(context);
  function totalShoppedPrice() {
    const amount = state
      .filter((s) => s.status === true)
      .reduce((acc, obj) => acc + obj.price * obj.quantity, 0);
    return amount;
  }
  return createPortal(
    <div className="menu">
      <div className="front">
        <h1 className="model-title">Shopping Cart</h1>
        <button
          className="close"
          onClick={() =>
            document.querySelector(".model").classList.remove("active")
          }
        >
          X
        </button>
      </div>
      <div className="shoppings">
        {state
          .filter((s) => s.status === true)
          .map((s) => (
            <Shopping key={s.id} {...s} />
          ))}
      </div>
      <h1 className="total">Total Price: {totalShoppedPrice()}</h1>
    </div>,
    document.querySelector(".model")
  );
}

export default Model;
