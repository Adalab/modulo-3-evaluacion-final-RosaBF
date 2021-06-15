import React from 'react';

const FilterByName = (props) => {
  return (
    <>
      <label className='form__label' htmlFor='name'>
        Filter by name:
      </label>
      <input className='form__input-text' type='text' name='name' id='name' />
    </>
  );
};

export default FilterByName;
