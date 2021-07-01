import React from 'react'
import ReactDOM from 'react-dom'

var GroceryItemEntry = function(props) {
  return (
  <span>{props.item.name} {props.item.quantity}
    <br>
    </br>
  </span>
  )
}

export default GroceryItemEntry;