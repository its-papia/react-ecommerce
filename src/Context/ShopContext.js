import React, { createContext } from 'react'
import new_products from '../Assets/data/data_products';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{
    
    const contextValue = {new_products}

    return (
        <ShopContext.Provider value = {contextValue}>
            
            {props.children}

        </ShopContext.Provider >
    )
    

}

export default ShopContextProvider;