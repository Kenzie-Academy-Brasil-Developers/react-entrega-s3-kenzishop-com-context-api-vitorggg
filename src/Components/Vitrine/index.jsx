import { Container } from "./styles";
import ProdCard from "../ProdCard";
import { useContext } from "react";
import { CatalogueContext } from "../../Providers/catalogue";

const Vitrine = () => {
  const { catalogue } = useContext(CatalogueContext);

  return (
    <Container>
      <ul>
        {catalogue.map((product) => (
          <li key={product.name}>
            <ProdCard prod={product} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Vitrine;
