import React from 'react';
import PropTypes from 'prop-types';

function Cider(props) {

  function handleClick() {
    return props.onBuyPint(props.id);
  }

  let ciderDisplay = null;
  if (props.quantity <= 0) {
    ciderDisplay = <h3>{props.name} is <strong>Out of Stock</strong></h3>
  } else {
    ciderDisplay =
      <>
        <h3>{props.name}: {props.brand}</h3>
        <h4>{props.quantity}</h4>
        <h4>${props.price}/pint</h4> <button className="btn" onClick={handleClick}>Buy a Pint</button>
      </>
  }

  return (
    <div className='cider'>
       {ciderDisplay}
    </div>
  );
}

Cider.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  onBuyPint: PropTypes.func
}

export default Cider;