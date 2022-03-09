import Routes from "./Routes";
import { CatalogueProvider } from "./Providers/catalogue";
import { CartProvider } from "./Providers/cart";
import GlobalStyle from "./Styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <CatalogueProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </CatalogueProvider>
    </>
  );
}

export default App;
