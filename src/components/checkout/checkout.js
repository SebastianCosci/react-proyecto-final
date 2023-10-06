import { CartContext } from '../../context/cartcontext.js';
import { collection, addDoc, Timestamp } from 'firebase/firestore'; 
import { db } from '../../services/firebase/firebase.js'; 
import React, { useContext, useState } from 'react';
import "./checkout.css";


const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mail: '',
    paymentMethod: 'efectivo', // Opciones: 'efectivo', 'tarjeta de credito', 'mercado pago'
  });

  const { cart, total, clearCart } = useContext(CartContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validación de campos obligatorios
    if (!formData.name || !formData.phone || !formData.mail || !formData.paymentMethod) {
      alert('Por favor, completa todos los campos obligatorios.');
      setLoading(false);
      return;
    }

    // Crea un objeto para el pedido
    const order = {
      name: formData.name,
      phone: formData.phone,
      mail: formData.mail,
      paymentMethod: formData.paymentMethod,
      items: cart,
      total: total,
      date: Timestamp.now(),
    };

    try {
      // Agrega el pedido a la base de datos de Firestore
      const orderRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(orderRef.id);
      clearCart(); // Limpia el carrito después de crear el pedido
      setLoading(false);
    } catch (error) {
      console.error('Error al crear el pedido:', error);
      setLoading(false);
    }
  };

  return (
<div className="CheckoutForm">
  <h2 className="ItemHeader">Checkout</h2>
  <form onSubmit={handleSubmit}>
    <div className="FormItem">
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
    </div>
    <div className="FormItem">
      <label htmlFor="phone">Teléfono:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        pattern="[0-9]*"
        required
      />
    </div>
    <div className="FormItem">
      <label htmlFor="mail">Correo Electrónico:</label>
      <input
        type="email"
        id="mail"
        name="mail"
        value={formData.mail}
        onChange={handleInputChange}
        required
      />
    </div>
    <div className="FormItem">
      <label htmlFor="paymentMethod">Medio de Pago:</label>
      <select
        id="paymentMethod"
        name="paymentMethod"
        value={formData.paymentMethod}
        onChange={handleInputChange}
        required
      >
        <option value="efectivo">Efectivo</option>
        <option value="tarjeta de credito">Tarjeta de Crédito</option>
        <option value="mercado pago">Mercado Pago</option>
      </select>
    </div>
    <div className="FormItem">
      <button
        type="submit"
        disabled={loading}
        className="buttomproduct"
      >
        {loading ? 'Procesando...' : 'Confirmar Pedido'}
      </button>
    </div>
  </form>
  {orderId && (
    <p className="ItemHeader">
      Tu pedido ha sido creado con el número de orden: {orderId}
    </p>
  )}
</div>

  );
};

export default Checkout;
