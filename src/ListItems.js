import React from 'react';
import './ListItems.css';

function ListItems(props){
  const items = props.items;
  const listItems = items.map(item => {
    return <div className="list" key={item.key}>
      <p>
      <input
      type = "text"
      id={item.key}
      value={item.text}
      onChange={
        (e) => {
          props.setUpdate(e.target.value, item.key)
        }
      }
      />
      <span role="img" onClick={() => props.deleteItem(item.key)}> &#128465;</span>
      </p>
      </div>})
  return(
    <div>{listItems}</div>
  );
}

export default ListItems;
