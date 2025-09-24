import { useContext } from "react";
import Product from "./Product";
import { context } from "./ContextProvider";
function Products() {
  const { state } = useContext(context);
  return (
    <>
      {state.map((s) => {
        return <Product key={s.id} {...s} />;
      })}
    </>
  );
}

export default Products;
