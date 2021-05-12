import React from 'react';
import groceries from '../data/groceriesData.js';
import GroceryListItem from './GroceryListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groceryList: groceries,
      item: '',
      quantity: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    var newItem = {
      item: this.state.item,
      quantity: this.state.quantity
    }

    this.setState({
      // groceryList: this.state.groceryList.concat(newItem)
      groceryList: [newItem, ...this.state.groceryList],
      item: '',
      quantity: ''
    })
  }

  render() {
    return (
    <div>
      <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input name="item" placeholder="Grocery Item" value={this.state.item} onChange={this.handleChange}  />
          </label>
          <label>
            <input name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleChange}  />
          </label>
          <button>Add Grocery</button>
        </form>
        <ul className="groceries">
        {this.state.groceryList.map((groceryItem, index) =>
          <GroceryListItem groceryItem = {groceryItem} key = {index} />
        )}
        </ul>
      </div>
    )
  }
};

export default App;




// const App = () => (
//   <div>
//     <img src="grocery-bags.png" />
//     <h1>Grocery List</h1>
//     <form>
//       <label> Item
//         <input name="item" value="" />
//       </label>
//       <label> Quantity
//         <input name="quantity" value="" />
//       </label>
//       <button>Add Grocery</button>
//       <ul className="groceries">
//         <li>
//           <span>apples - </span>
//           <span>4</span>
//         </li>
//         <li>
//           <span>bread - </span>
//           <span>2</span>
//         </li>
//         <li>
//           <span>etc...</span>
//         </li>
//       </ul>
//     </form>
//   </div>
// );