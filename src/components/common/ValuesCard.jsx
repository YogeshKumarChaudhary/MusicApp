import React from 'react';

const ValuesCard = ({data}) => {
  return (
    <div className='valuesCard-container'>
      <div className='valuesImage'>
        <img src={data.src} alt="" />
      </div>
      <div className='valuesContent'>
        <div>{data.title}</div>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default ValuesCard;
