import React from 'react';
import ReactDOM from 'react-dom';
import groceriesData from '../data/groceriesData.js';
import GroceryList from './GroceryList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data : groceriesData,
      nameValue : '',
      quantityValue : ''
    }
    this.updateForm = this.updateForm.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  updateForm(evt) {
    this.setState( {
     [evt.target.name] : evt.target.value
    })
  }

  addItem(evt) {
    evt.preventDefault();
    var newItem = {
      name : this.state.nameValue,
      quantity : this.state.quantityValue
    }

    this.setState( {
      data : [...this.state.data, newItem],
      nameValue : '',
      quantityValue : ''
    })
  }


  render() {
   return (
    <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <form type="submit" onSubmit={this.addItem}>
          <label> Item
            <input name="nameValue" value={this.state.nameValue} onChange={this.updateForm} />
          </label>
          <label> Quantity
            <input name="quantityValue" value={this.state.quantityValue} onChange={this.updateForm}/>
          </label>
          <button >Add Grocery</button>
          <ul className="groceries">
            <GroceryList list ={this.state.data}/>
          </ul>
        </form >
      </div>
   )
  }

}


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

export default App;