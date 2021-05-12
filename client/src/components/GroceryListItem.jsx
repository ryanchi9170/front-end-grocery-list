import React from 'react';

var GroceryListItem = (props) => (
  <li>
  {props.groceryItem.item} - {props.groceryItem.quantity}
  </li>
);

export default GroceryListItem;