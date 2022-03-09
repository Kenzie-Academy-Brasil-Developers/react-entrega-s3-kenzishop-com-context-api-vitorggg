import { Container } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

const ProdCart = ({ prod }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleCart = () => {
    removeFromCart(prod);
  };

  const price = Number(prod.price).toFixed(2);

  return (
    <Container>
      <figure>
        <img alt={prod.name} src={prod.image} />
      </figure>
      <div>
        <h3>{prod.name}</h3>
        <span>{price} BRL</span>
        <a onClick={handleCart}>Remover</a>
      </div>
    </Container>
  );
};

export default ProdCart;
