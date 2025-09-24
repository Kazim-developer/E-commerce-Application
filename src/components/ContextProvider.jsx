import { createContext, useReducer, useState } from "react";
import { v4 as uuid4 } from "uuid";
import bike from "../assets/bike.jpg";
import camera from "../assets/camera.png";
import car from "../assets/car.png";
import headphones from "../assets/headphones.jpg";
import laptop from "../assets/laptop.png";
import sofa from "../assets/sofa.png";

export const context = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return state.map((s) =>
        s.id === action.id ? { ...s, status: true } : s
      );
    case "remove":
      return state.map((s) =>
        s.id === action.id ? { ...s, status: false } : s
      );
    case "increase":
      return state.map((s) =>
        s.id === action.id ? { ...s, quantity: s.quantity + 1 } : s
      );

    case "decrease":
      return state.map((s) =>
        s.id === action.id
          ? { ...s, quantity: s.quantity > 1 ? s.quantity - 1 : 1 }
          : s
      );

    default:
      return state;
  }
}

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, [
    {
      id: uuid4(),
      title: "Camera",
      price: 25000,
      status: false,
      image: camera,
      quantity: 1,
    },
    {
      id: uuid4(),
      title: "Bike",
      price: 215000,
      status: false,
      image: bike,
      quantity: 1,
    },
    {
      id: uuid4(),
      title: "Car",
      price: 225000,
      status: false,
      image: car,
      quantity: 1,
    },
    {
      id: uuid4(),
      title: "Headphones",
      price: 200,
      status: false,
      image: headphones,
      quantity: 1,
    },
    {
      id: uuid4(),
      title: "Sofa",
      price: 5000,
      status: false,
      image: sofa,
      quantity: 1,
    },
    {
      id: uuid4(),
      title: "Laptop",
      price: 2000,
      status: false,
      image: laptop,
      quantity: 1,
    },
  ]);

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
}

export default ContextProvider;
