import React,{useContext} from 'react';
import {RemoveItemContext} from '../context/context'
const AddedFeature = props => {
const removeFeature = useContext(RemoveItemContext)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=>removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
