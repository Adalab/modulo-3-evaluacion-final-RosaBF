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
      <form className='form'>
        <label className='form__label' htmlFor='name'>
          Characters:
        </label>
        <input
          onChange={funcionINtermedia}
          className='form__input-text'
          type='text'
          name='name'
          id='name'
        />
      </form>
    </>
  );
};

export default FilterByName;
