/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import '../assets/styles/components/CardsDetails.scss';
import useGetData from '../hooks/useGetData';

const CardsDetails = ({ children }) => {
  const data = useGetData();
  return (
    <div className='card_details'>
      {
        data.results.map((item) => (
          <div className='card_photo center circle' key={item}>
            <img src={item.picture.large} alt={item.name.first} />
            <svg
              viewBox='0 0 100 100'
              xmlns='http://www.w3.org/2000/svg'
              enableBackground='new -580 439 577.9 194;'
              xmlSpace='preserve'
            >
              <circle cx='50' cy='50' r='40' />
            </svg>

            <p className='card_title'>Hi, My name is</p>
            <p className='card_value'>{`${item.name.first} ${item.name.last}`}</p>
          </div>
        ))
      }
      <div className='card_userdata'>
        {
          data.results.map((item) => (
            <ul key={item}>
              <li>{item.email}</li>
              <li>{item.location.country}</li>
            </ul>
          ))
        }
      </div>
    </div>
  );
};

export default CardsDetails;
