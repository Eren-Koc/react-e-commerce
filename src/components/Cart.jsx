import React, { useContext,useEffect,useState } from 'react'
import { AiOutlineShoppingCart,AiOutlineClose } from 'react-icons/ai';
import { ShopContext } from '../context/shop-context';
import { Link } from 'react-router-dom';
import SingleCart from './SingleCart';
const Cart = () => {
  const [countInProduct,setCountInProduct] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const {cartItems} = useContext(ShopContext);



const ProductInCart=()=>{
let count=0;
for(let i=0;i<cartItems.length;i++){
count+=cartItems[i].count;
}
return count;
}

const TotalProduct=()=>{
  let total=0;
  for(let i=0;i<cartItems.length;i++){ 
      total+= cartItems[i].count * cartItems[i].price;  
  } 
  // console.log(total);
    return total.toFixed(2);
  }

useEffect(()=>{
  setCountInProduct(ProductInCart());
     setOrderTotal(TotalProduct());

     if(ProductInCart()===0){
      CartClose();
     }
    
},[cartItems])






const CartClose=()=>{
const cart=document.getElementById("cart");
cart.style.display="none";
}


  return (
    <div id='cart' className='hidden md:w-[450px] max-md:w-1/2 min-w-[270px] z-50 fixed top-0 right-0 px-2 py-4 shadow-lg bg-app-white h-full '>
        <div className='w-full h-fit flex items-center mb-4 justify-between'>
        <div className='flex items-center justify-center'>
        <AiOutlineShoppingCart stroke='4px' className='w-6 h-auto'/>
        <span className='text-xl  ml-2 '>Basket <span>({countInProduct})</span> </span>
        </div>
        <AiOutlineClose className='cursor-pointer w-6 h-auto' onClick={()=>{CartClose()}}/>
        </div>
        <div id='products-cart' className='w-full  flex flex-col '>
    { cartItems.map(incart=>(
        <SingleCart incart={incart} key={incart.id} />
    ))}
    </div>
    <Link to="/Checkout">
    <div onClick={()=>{CartClose()}} className=' hover:bg-[#9a7111]  duration-300 cursor-pointer w-full flex justify-between px-4 center items-center mt-4 py-4 rounded-md bg-app-orange text-white'>Complete Order <span className='font-semibold'> <i> ${orderTotal}</i></span></div>
    </Link>
   </div>
  )
}

export default Cart