import React from 'react';
import "./Categories.css";
import { categories } from '../../Variabledata/Categories';
import Categorylist from '../CategoryListitem/Categorylist';

const Categories = () => {
  return (
    <div>
      <div className='Category__heading'>
        <h1> Select Your Favourite Outfit Style </h1>
      </div>
      <div className='Category__container'>
        {categories.map(item => (
          <Categorylist item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default Categories;
