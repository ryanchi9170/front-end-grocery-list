import React from 'react';
import ReactDOM from 'react-dom';
import GroceryItemEntry from './groceryItemEntry.jsx';

var GroceryList = function(props) {
 return (
   <li>
   {props.list.map((elem, i) =>
  <GroceryItemEntry item={elem} key={i} />
   )}
   </li>
 )
}

export default GroceryList;