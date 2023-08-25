import React, { createContext, useState } from 'react'

export const ShopContext =createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState([]);

   

    const addToCart = (item,amout) => {
      let search = false;
    
      if (cartItems.length < 1) {
        if(amout){
          const updatedItem = { ...item, count: amout };
          setCartItems([updatedItem]);
        }
        else{
          setCartItems([item]);
        }
       
      } else {
        const updatedCartItems = cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            search = true;
            if(amout){
              return { ...cartItem, count: cartItem.count + amout  };
            }
            else{
              return { ...cartItem, count: cartItem.count + 1  };
            }
            
          }
          return cartItem;
        });
    
        if (!search) {
          if(amout){
           
            const updatedItem = { ...item, count: amout };
            setCartItems([...cartItems,updatedItem]);
          }
          else{
            setCartItems([...cartItems, item]);
          }
          
        } else {
          setCartItems(updatedCartItems);
        }
      }
    };
    const removeFromCart=(item)=>{
      
      const updatedCartItems = cartItems.map((cartItem)=>{
    
        if(cartItem.id === item.id){
          
          if(cartItem.count===1){
            return null;
          }
          else{
            return { ...cartItem, count: cartItem.count - 1 };
          } 
        }
        return cartItem;
      })

      const updatedCart = updatedCartItems.filter(item => item !== null);
      setCartItems(updatedCart);
    }
   
    const contextValue={cartItems,addToCart,removeFromCart};

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
