import cart from "./asets/cart.png"
import "./cartwidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/cartcontext.js"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { totalQuantity } = useContext (CartContext)
  
  return(
        <Link to='/cart' className="cartwidget" >
          <img className="cart-img" src={cart} alt="cart-widget"/>
          {  totalQuantity }
        </Link>
          
        
    )
}

export default CartWidget