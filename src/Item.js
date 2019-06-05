import React from 'react';

export default class Item extends React.Component {
  render() {
    return (
      <span style={{"display":"inline-block","margin":"10px","padding":"10px","border":"3px","borderStyle":"solid"}}>
        <p><b>{this.props.item.name}</b></p>
        <p><i>Action Figure</i></p>
        <p>Height: {this.props.item.height}</p>
        <p>Hair color: {this.props.item["hair_color"]}</p>
        <p>{this.props.item.quantity? `${this.props.item.quantity} in cart`: `` }</p>
        <button onClick={() => this.props.addCartCallBack(this.props.item.name)}>Add to Cart</button>
      </span>
    );
  }
}
