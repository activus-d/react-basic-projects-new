import React from 'react';

const List = (props) => {
  const {person} = props
  return (
    <>
      <ul>
        {person}
      </ul>
    </>
  );
};

export default List;
