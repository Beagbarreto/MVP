import React from 'react';

const ActListEntry = (props) => (
  <div>
    <span> {props.act.day} </span>
    <span> {props.act.title} </span>
    <span> {props.act.hour} </span>
  </div>
/*  <div  onClick={()=>{showDetails(link to database here)}}
   >
   //click will display details of event
   //if there are no events always shows message no upcoming events
   //if event is not clicked will show details of first event on the list
   //button needs event handler
   //onClick={this.Details}
  </div>
*/)

export default ActListEntry;
