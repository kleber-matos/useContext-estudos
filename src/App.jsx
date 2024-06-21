import { useState } from "react";
import Router from "./Router.jsx";
import { NavContext } from "./context/NavContext.jsx";

export default function App() {
  const [item, setItem] = useState([
    {
      nome: "Celular",
      preco: 2899,
      id: 1,
    },
    {
      nome: "Notebook",
      preco: 1299,
      id: 2,
    },
  ]);
  const [array, setArray] = useState([]);
  const [quantidade, setQuantidade] = useState(0);
  return (
    <>
      <NavContext.Provider
        value={{ item, setItem, array, setArray, quantidade, setQuantidade }}
      >
        <Router />
      </NavContext.Provider>
    </>
  );
}
