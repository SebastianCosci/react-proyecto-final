import React, { useContext } from "react";
import { CartContext } from "../../context/cartcontext.js";

const CartItem = ({ id, name, quantity, price }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(id);
  };

  const subtotal = quantity * price;

  return (
    <div className="CartItem">
      <div className="CartItemInfo">
        <h3>{name}</h3>
        <p>Cantidad: {quantity}</p>
        <p>Precio por unidad: ${price}</p>
        <p>Subtotal: ${subtotal}</p>
      </div>
      <button onClick={handleRemoveItem} className="removeButton">
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
