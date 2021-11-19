import React from 'react';
import Cider from './Cider';
import PropTypes from 'prop-types';

function CiderList(props) {
  return (
    <>
      {props.ciderList.map((cider) =>
        <Cider name={cider.name}
           brand={cider.brand}
           price={cider.price}
           alcoholContent={cider.alcoholContent}
           quantity={cider.quantity}
           description={cider.description}
           id={cider.id}
           key={cider.id}
           onBuyPint={props.onBuyPint}
           onCiderSelect={props.onCiderSelect}/>
      )}
    </>
  );
}

CiderList.propTypes ={
  ciderList: PropTypes.array,
  onBuyPint: PropTypes.func,
  onCiderSelect: PropTypes.func
}

export default CiderList;