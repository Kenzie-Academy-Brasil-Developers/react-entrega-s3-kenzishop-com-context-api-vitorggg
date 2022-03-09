import CartCounter from "../../Components/CartCounter";
import Header from "../../Components/Header";
import VitrineCart from "../../Components/VitrineCart";
import { Content } from "./styles";
import EmptyCart from "../../Components/EmptyCart";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

const DisplayCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Header />
      {cart.length > 0 ? (
        <Content>
          <VitrineCart />
          <CartCounter />
        </Content>
      ) : (
        <Content>
          <EmptyCart />
          <CartCounter />
        </Content>
      )}
    </>
  );
};

export default DisplayCart;
