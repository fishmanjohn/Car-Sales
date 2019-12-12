import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {BuyItemContext, RemoveItemContext} from './context/context';
import {addItem, removeItem} from './actions/actions'
const App = (props) => {
  console.log(props)
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeItem(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addItem(item)
  };

  return (
    <RemoveItemContext.Provider value={removeFeature}>
      <BuyItemContext.Provider value={buyItem}>
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
    </BuyItemContext.Provider>
    </RemoveItemContext.Provider>
  );
};

const mapStateToProps = state =>{
  return{
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {addItem, removeItem})(App);
