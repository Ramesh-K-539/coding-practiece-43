// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = props => (
  <CartContext.Consumer>
    {value => {
      const {cartDetails} = props
      let total = 0
      cartDetails.forEach(item => {
        total += item.price * item.quantity
      })
      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-heading">
            Order Total: <span className="amount-text">Rs {total}/-</span>
          </h1>
          <p className="cart-items-count">{cartDetails.length} items in cart</p>
          <button className="check-out-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
