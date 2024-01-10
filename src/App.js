import Header from "./components/Header";
import { CommonProvider } from './context/common/commonContext';
import RouterRoutes from './routes/RouterRoutes';
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import { CartProvider } from "./context/cart/cartContext";
import { FiltersProvider } from "./context/filters/filtersContext"

function App() {
  return (
    <div className="App">
      <CommonProvider>
      <FiltersProvider>
      <CartProvider>
        <BrowserRouter>
        <Header />
        <RouterRoutes />
        <Footer />
        </BrowserRouter>
      </CartProvider>
      </FiltersProvider>
      </CommonProvider>

    </div>
  );
}

export default App;
