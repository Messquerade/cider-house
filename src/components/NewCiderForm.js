import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewCiderForm(props) {

  function handleNewCiderFormSubmission(event) {
    event.preventDefault();
    props.onNewCiderCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: parseFloat(event.target.price.value),
      alcoholContent: parseFloat(event.target.alcoholContent.value),
      quantity: parseInt(event.target.quantity.value),
      description: event.target.description.value,
      id: v4()
    });
  }

  return (
    <>
    <h2>Create a new Cider</h2>
    <form onSubmit={handleNewCiderFormSubmission}>
      <label for="name">Name:</label>
      <input
        type='text'
        name='name'
        placeholder='cider name'
        className='form-control' />
        <br/>
      <label for="brand">Brand:</label>
      <input
        type='text'
        name='brand'
        placeholder='brand of cider'
        className='form-control' />
        <br/>
      <label for="price">Price per pint:</label>
      <input
        type='number'
        name='price'
        placeholder='0'
        min='0'
        step='0.01'
        className='form-control' />
        <br/>
      <label for="alcoholContent">Alcohol Content (% per volume):</label>
      <input
        type='number'
        name='alcoholContent'
        placeholder='0'
        min='0'
        max='100'
        step='0.1'
        className='form-control' />
        <br/>
      <label for="quantity">Available Quantity (in pints)</label>
      <input
        type='number'
        name='quantity'
        placeholder='124'
        min='0'
        step='1'
        className='form-control' />
        <br/>
      <label for="description">Description:</label>
      <input
        type='textarea'
        name='description'
        placeholder='The best cider ever'
        className='form-control' />
        <br/>
        <button className='btn' type='submit'>Create Cider</button>
    </form>
    </>
  );
}

NewCiderForm.propTypes = {
  onNewCiderCreation: PropTypes.func
}

export default NewCiderForm;