import React, { Component } from 'react'
import Part from './Part'

class Customize extends Component {
  
  render(props) {
    console.log(this.props.features)
    return (
      <div className="App">
        <h1>Customize Your Laptop</h1>
        {Object.keys(this.props.features).map((feature, index) => 
        <Part featureHash={feature + '-' + index} 
              selected={this.props.selected} 
              currency={this.props.currency} key={index} 
              featureName={feature} 
              features={this.props.features[feature]} 
              select={this.props.select}/>)}
      </div>
    );
  }
}

export default Customize;