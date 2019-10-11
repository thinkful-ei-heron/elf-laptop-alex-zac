import React, { Component } from 'react'

class CartItems extends Component {

  render(props) {
    return (
      <div className="summary__option" key={this.props.featureHash}>
        <div className="summary__option__label">{this.props.feature} </div>
        <div className="summary__option__value">{this.props.selected.name}</div>
        <div className="summary__option__cost">
          {this.props.currency.format(this.props.selected.cost)}
        </div>
      </div>
      // const selectedOption = this.state.selected[feature];
    );
  }
}

export default CartItems;