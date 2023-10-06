import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListsContainer.js";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import CartProvider from "./context/cartcontext.js";
import Cart from "./components/Cart/Cart.js";
import Checkout from "./components/checkout/checkout.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path= '/checkout' element= {<Checkout/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
