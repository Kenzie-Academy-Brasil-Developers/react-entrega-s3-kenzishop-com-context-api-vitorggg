import Button from "../Button";
import { Container } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

const ProdCard = ({ prod }) => {
  const { cart, addToCart } = useContext(CartContext);

  const handleProduct = () => {
    if (!cart.includes(prod)) {
      addToCart(prod);
    }
  };

  const price = Number(prod.price).toFixed(2);

  return (
    <Container>
      <figure>
        <img alt={prod.name} src={prod.image} />
      </figure>
      <h3>{prod.name}</h3>
      <span>{price} BRL</span>
      <Button onClick={handleProduct} width="120px" height="40px">
        Comprar
      </Button>
    </Container>
  );
};

export default ProdCard;
