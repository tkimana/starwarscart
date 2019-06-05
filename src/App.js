import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ItemBrowser from './ItemBrowser';

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      items : [] // changes when add to cart
    };

    fetch('https://swapi.co/api/people').then(
      res => res.json()
    ).then(
      data => {
        this.setState( {items:data.results} );
      }
    );
  }

  addToCart = (name) => {
    let items = this.state.items;
    let item = items.find( item => {return item.name === name} );
    if(item) {
      if(item.quantity) {
        item.quantity++;
      } else {
        item.quantity = 1;
      }
      this.setState(
        {items: items}
      );
    }
  };

  deleteFromCart = (name) => {
    let items = this.state.items;
    let item = items.find( item => {return item.name === name} );
    if(item) {
      
      if(item.quantity) {
        delete item.quantity;
      }
      this.setState(
        {items: items}
      );
    }
  };

  plusOne = (name)=>{
    let items = this.state.items;
    let item = items.find( item => {return item.name === name} );
    if(item) {
      
      if(item.quantity) {
        item.quantity++;
      }
      this.setState(
        {items: items}
      );
    }
  }

  minusOne = (name)=>{
    let items = this.state.items;
    let item = items.find( item => {return item.name === name} );
    if(item) {
      
      if(item.quantity) {
        item.quantity--;
        if(item.quantity === 0) {
          delete item.quantity;
        }
      }
      this.setState(
        {items: items}
      );
    }
  }


  render() {
    return (
    <div className="App">
      <Header items={this.state.items} deleteFromCart={this.deleteFromCart} plusOne={this.plusOne} minusOne={this.minusOne}/>
      <ItemBrowser items={this.state.items} addToCartCallback={this.addToCart} />
    </div>
    );
  }
}

