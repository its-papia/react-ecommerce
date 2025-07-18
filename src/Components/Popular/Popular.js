import React from 'react'
import './popular.css'
import products from '../../Assets/data/data_products'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN </h1>
        <hr/>
        <div className='popular_item'>
        {
        products.map( (products) => {
          return <Item 
                  key = {products.id}
                  name = {products.name} 
                  image = {products.image}
                  new_price = { products.new_price} 
                  old_price = { products.old_price}  />
        }
        )
       }



        </div>

    </div>
  )
}

export default Popular