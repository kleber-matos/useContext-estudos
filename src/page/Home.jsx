import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import style from "../page/style.module.scss";

export default function Home() {
  const { item, array, setArray, setQuantidade, quantidade } =
    useContext(NavContext);

  const addProduto = (id) => {
    let newItem = item.filter((e) => e.id === id);
    console.log(newItem);

    setArray(array.concat(newItem));
    console.log(array);
  };

  return (
    <>
      <header className={style.menu}>
        <h2>Home</h2>
        <Link className={style.icon} to="/compras">
          <IoCart />
          {quantidade}
        </Link>
      </header>

      <section>
        {item.map((e, id) => (
          <div className={style.card} key={id}>
            <h2>{e.nome}</h2>
            <h2>R$ {e.preco}</h2>

            <button
              onClick={() => {
                addProduto(e.id), setQuantidade((prev) => prev + 1);
              }}
            >
              comprar
            </button>
          </div>
        ))}
      </section>
    </>
  );
}
