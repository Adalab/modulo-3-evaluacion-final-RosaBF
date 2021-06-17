import React from 'react';
import '../stylesheets/App.scss';

const FilterByName = (props) => {
  const funcionIntermedia = (ev) => {
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
          Characters
        </label>
        <input
          className='form__input-text'
          onChange={funcionIntermedia}
          type='text'
          name='name'
          id='name'
          value={props.filterName}
        />
      </form>
    </>
  );
};

export default FilterByName;
