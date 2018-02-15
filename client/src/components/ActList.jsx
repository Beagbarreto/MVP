import React from 'react';
import ActListEntry from './ActListEntry.jsx';

const ActList = (props) => (
  <div>/*can add a clas for css in this div */
    {props.act.map((act) => <ActListEntry act={act} key={act.id}/>)}
  </div>
)
export default ActList;
