import React from 'react';

export default class DropDownItem extends React.Component{

  onClick=()=>{
    this.props.deleteFromCart(this.props.item.name)
  }
  render(){
    return(
      <div> 
        <p>{this.props.item.name} (qty {this.props.item.quantity})
        <button onClick={() => {this.props.plusOne(this.props.item.name)}}>+</button>
        <button onClick={() => {this.props.minusOne(this.props.item.name)}}>-</button>
        <button onClick={this.onClick}>Delete</button></p>

        
      </div>
    )
  }
}