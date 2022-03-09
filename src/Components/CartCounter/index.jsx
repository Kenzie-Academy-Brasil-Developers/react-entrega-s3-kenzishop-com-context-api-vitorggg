import { Container } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

const CartCounter = () => {
  const { cart } = useContext(CartContext);

  const counter = cart.length;

  const amount = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <Container>
      <h2>Resumo do pedido</h2>
      <p>Quantidade: {counter}</p>
      <span>Total: {amount.toFixed(2)} BRL</span>
    </Container>
  );
};

export default CartCounter;
