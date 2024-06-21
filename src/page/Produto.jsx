import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import style from "../page/style.module.scss";

export default function Produto() {
  const { array } = useContext(NavContext);

  return (
    <div>
      <h2>
        {array.length === 0
          ? "Seu carrinho está vazio"
          : `Você comprou ${array.length} item`}
      </h2>

      <h3 className={style.text}>
        {array.length === 0 ? "" : `Seus produtos`}
      </h3>
      {array.map((e, id) => (
        <div className={style.card} key={id}>
          <h3>{e.nome}</h3>
          <p>R$ {e.preco},99</p>
        </div>
      ))}
    </div>
  );
}
