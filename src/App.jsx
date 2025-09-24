import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
function App() {
  return (
    <>
      <Navbar />
      <Model />
      <div className="products">
        <Products />
      </div>
    </>
  );
}

export default App;
