import React from 'react';
import PropTypes from 'prop-types';

function CiderDetail(props) {
  const {cider} = props;

  return (
    <>
    <h3>{cider.name}: {cider.brand}</h3>
    <h4>${cider.price}/pint</h4>
    <h4>Alcohol Content: {cider.alcoholContent}%</h4>
    <h4>{cider.quantity} pints available</h4>
    <h4>{cider.description}</h4>
    </>
  );
}

CiderDetail.propTypes ={
  cider: PropTypes.object
}

export default CiderDetail;