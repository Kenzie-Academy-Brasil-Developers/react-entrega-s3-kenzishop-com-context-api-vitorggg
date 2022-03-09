import { Container, LinksContent } from "./styles";
import { Link } from "react-router-dom";
import { FiHome, FiShoppingBag } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <h2>Kenzie Shop</h2>
      <LinksContent>
        <Link to="/cart">
          <FiShoppingBag />
          Carrinho
        </Link>
        {cart.length > 0 && <div>{cart.length}</div>}
        <Link to="/">
          <FiHome />
          Home
        </Link>
      </LinksContent>
    </Container>
  );
};

export default Header;
