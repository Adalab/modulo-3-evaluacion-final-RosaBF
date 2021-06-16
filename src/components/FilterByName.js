import React from 'react';

const FilterByName = (props) => {
  const funcionINtermedia = (ev) => {
    props.handleFilterName({
      key: 'name',
      value: ev.target.value,
    });
  };

  console.log('props', props);
  return (
    <>
      <label className='form__label' htmlFor='name'>
        Filter by name:
      </label>
      <input
        onChange={funcionINtermedia}
        className='form__input-text'
        type='text'
        name='name'
        id='name'
      />
    </>
  );
};

export default FilterByName;
