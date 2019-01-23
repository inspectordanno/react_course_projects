import React from 'react';

const IndividualPage = (props) => {
  console.log(props);
  return (
    <div>
      This individual page has an id of {props.match.params.id}
    </div>
  )
} 
export default IndividualPage;