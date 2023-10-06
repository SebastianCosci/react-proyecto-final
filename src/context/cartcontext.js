import { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  total: 0,
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const productIndex = cart.findIndex((prod) => prod.id === item.id);

    if (productIndex !== -1) {
      // El producto ya existe en el carrito, sumar la cantidad
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // El producto no está en el carrito, agregarlo
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  // Calcular totalQuantity y total
  const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);

  const total = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

