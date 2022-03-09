import { Container } from "./styles";
import ProdCart from "../ProdCart";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

const VitrineCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <ul>
        {cart.map((product) => (
          <li key={product.name}>
            <ProdCart prod={product} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default VitrineCart;
