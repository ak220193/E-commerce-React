import React from 'react';
import "./Categories.css";
import { categories } from '../../Variabledata/Categories';
import Categorylist from '../CategoryListitem/Categorylist';

const Categories = () => {
  return (
    <div className='Category__container'>
      {
        categories.map(item => (
          <Categorylist item={item} key={item.id}/>
        ))
      }
    </div>
  );
};

export default Categories;
