import React from 'react';
import FilterByName from './FilterByName';

const Filters = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className='form' onSubmit={handleForm}>
        <FilterByName
          filterName={props.filterName}
          handleFilterName={props.handleFilterName}
        />
      </form>
    </section>
  );
};

export default Filters;
