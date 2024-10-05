// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let amount = 0
      cartList.forEach(item => {
        amount += item.price * item.quantity
      })
      return (
        <>
          <div className="cartsummary-container">
            <h1 className="summary-heading">
              <span className="summary-span">Order Total:</span> Rs {amount}/-
            </h1>
            <p className="summary-para">{cartList.length} Items in cart</p>
            <button className="checkout-btn" type="button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
