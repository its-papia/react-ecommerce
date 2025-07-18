import React from 'react'
import './ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'


const ShopCategory = (props) => {

  const {new_products} = useContext(ShopContext);
  return (
    <div className='shop'>

      <div>

      <h1> {props.category} Products</h1>

      </div>
    
    <div className='shop_item'>
      {
        new_products.map( (item, i) =>{
          if(props.category === item.category) {
            return <Item key = {i} 
                        name = {item.name}
                        image = {item.image}
                        new_price = { item.new_price} 
                        old_price = { item.old_price}  />

          }

          else {
            return null;
          }
        }

        )
      }
    </div>

    </div>
   
  )
}

export default ShopCategory