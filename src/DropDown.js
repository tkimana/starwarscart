import React from 'react';
import DropDownItem from './dropDownItem';


export default class DropDown extends React.Component {
  render() {
    return (
      <div style={{"background":"secondary","position":"absolute","zIndex":"1","borderStyle":"solid","borderWidth":"3px","width":"300px","right":"0px"}}>

  {this.props.items.map(item => {return (item.quantity ? <DropDownItem item={item} deleteFromCart={this.props.deleteFromCart} plusOne={this.props.plusOne} minusOne={this.props.minusOne}/> : null)})}
        {

  (this.props.items.find( item => {return item.quantity !== undefined} ) !== undefined)
          ? ``
          : `Nothing in the cart!`
        }
      </div> 
    );
  }
}
