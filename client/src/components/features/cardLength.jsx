import React, { useContext } from 'react'
import { categoryContext } from '../../context/category';

function CardLength() {
  const { category, setCategory} = useContext(categoryContext);
  const categoryLength = category.length;
  return (
    <div>
      <h1>{category[0]?.categoryName}</h1>
      {/* {
        category.map(item=>(
        <h1>{item.categoryName}</h1>
        ))
      } */}
      <h1>{categoryLength}</h1>
    </div>
  )
}

export default CardLength
