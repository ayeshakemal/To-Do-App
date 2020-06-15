import React from 'react';
import './App.css';
import ListItems from './ListItems.js'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''}
  }
  this.addItem = this.addItem.bind(this);
  this.handleInput = this.handleInput.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
  this.setUpdate = this.setUpdate.bind(this);
}

  handleInput(e){
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()}
      })
    }

    addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:'' }
    })
    }
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item =>
    item.key !==key);
    this.setState({
      items: filteredItems
    })
  }
  setUpdate(text,key){
   const items = this.state.items;
   items.map(item=>{
     if(item.key===key){
       item.text= text;
     }
   })
   this.setState({
     items: items
   })
 }

  render (){
    return (

    <div className="App">

    <div className="top">
    <h1> You Have {this.state.items.length} Tasks</h1>
    </div>

     <header>
       <form id="to-do-form" onSubmit={this.addItem}>
         <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
         <button type="submit">Add</button>
       </form>
       <p>{this.state.items.text}</p>
         <ListItems
         items={this.state.items}
         deleteItem = {this.deleteItem}
         setUpdate = {this.setUpdate}
         />
     </header>
   </div>
    );
  }
}



export default App;
