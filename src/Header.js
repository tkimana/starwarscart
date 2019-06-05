import React from 'react';
import DropDown from './DropDown'


export default class Header extends React.Component {
  constructor() {
    super();
    this.state = { showDropDown : false }
  }

  onClick = () => {
    this.setState( 
      {
        showDropDown: !this.state.showDropDown
      }
    );
  };


  render() {
    return (
      <div>
        <div style={{"position":"absolute","left":"100px","top":"50px"}}>
        <h1><img width="150" height="150" src="milleniumFalcon_BG_REMOVED.png" />
        Star Wars Cart</h1>
        </div>
        <div style={{"position":"absolute","right":"100px","top":"50px"}}>
          <button onClick={this.onClick}><img src='bars.png' width={25} height={25} /></button>
          {this.state.showDropDown ? <DropDown  items={this.props.items} deleteFromCart={this.props.deleteFromCart} plusOne={this.props.plusOne} minusOne={this.props.minusOne} /> : null }
        </div>
       
      </div>
    );
  }
}
