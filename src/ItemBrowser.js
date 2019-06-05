import React from 'react';
import Item from './Item';

export default class ItemBrowser extends React.Component {
  render() {
    return (
      <div style={{"position":"absolute","top":"250px","left":"50px"}} className="IB">
        {this.props.items.map(item => <Item item={item} addCartCallBack= {this.props.addToCartCallback} />)}
      </div>
    );
  }
}
