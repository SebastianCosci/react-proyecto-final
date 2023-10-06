import "./cart.css"
import { useContext } from "react"
import { CartContext } from "../../context/cartcontext.js"
import  CartItem from "../CartItem/Cartitem.js"
import { Link } from "react-router-dom"


const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity === 0) {
        return(
            <div>
                <h1>No hay productos en el carrito agregados</h1>
                <Link to="/" className="productcarrito">Productos</Link>
            </div>
        )
    }

    return(
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total de la compra: ${total}</h3>
            <button onClick={() => clearCart ()} className="productcarrito">Vaciar carrito</button>
            <Link to='/checkout' className="productcarrito bordelink">checkout</Link>
        </div>
    )
}

export default Cart