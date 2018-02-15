import React from 'react';

const EventListEntry = (props) => (
  <div>
    <span> {props.act.date} </span>
    <span> {props.act.eventName} </span>
    <span> {props.act.time} </span>
    <span> {props.act.where} </span>
  </div>
  <div  onClick={()=>{}}
   >
  </div>
)


export default EventListEntry;

/*
<div>
      Description: <input value={this.state.description} onChange={this.handleDescription}></input>
      <br />
      Quantity: <input value={this.state.quantity} onChange={this.handleQuantity}></input>
    {button needs an event handler, an onClick to do something}
    <button onClick={this.addItem}>Add Grocery</button>
    </div>);
  }
}
*/
