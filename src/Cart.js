import React, { Component } from 'react'
import CartItems from './CartItems'
class Cart extends Component {

  render() {
    return (
    <div>
      <p>Cart</p>
      <CartItems />
    </div>
    );
  }
}

export default Cart;