import React,{useContext,useState,useEffect} from 'react'
import PageBanner from '../components/PageBanner'
import Input from '../components/Input'
import { ShopContext } from '../context/shop-context';
import Footer from '../components/Footer';
const Checkout = () => {

  const {cartItems} = useContext(ShopContext);
  const [orderTotal, setOrderTotal] = useState(0);
  const TotalProduct=()=>{
    let total=0;
    for(let i=0;i<cartItems.length;i++){ 
        total+= cartItems[i].count * cartItems[i].price;  
    } 
    // console.log(total);
      return total.toFixed(2);
    }
  
  useEffect(()=>{
setOrderTotal(TotalProduct());
  },[cartItems])
  return (

    <div className='pt-16 w-full'>
      <PageBanner title={"Checkout"}/>

      <div className='w-full mt-16 px-4 flex max-lg:flex-col max-lg:items-center lg:items-start justify-evenly'>
      
        <form className='sm:w-1/4 max-sm:w-full sm:min-w-[400px]' action="">
          <span className='font-semibold text-4xl'>Billing details</span>
        <Input title={"Your Name"} placeholder={"Eren Koç"} containerStyle={"mt-8"} inputStyle={"font-[400] outline-none w-full py-6 pl-4 mt-4 border  border-app-gray-9F rounded-xl"}/>
        <Input title={"Company Name (Optional)"} containerStyle={"mt-8"}  inputStyle={"font-[400] outline-none w-full py-6 pl-4 mt-4 border  border-app-gray-9F rounded-xl"}/>
        <Input title={"Country / Region"} containerStyle={"mt-8"}  inputStyle={"font-[400] outline-none w-full py-6 pl-4 mt-4 border  border-app-gray-9F rounded-xl"}/>
        <Input title={"Street address"}  containerStyle={"mt-8"}  inputStyle={"font-[400] outline-none w-full py-6 pl-4 mt-4 border  border-app-gray-9F rounded-xl"}/>
        <Input title={"Town / City"}  containerStyle={"mt-8"}  inputStyle={"font-[400] outline-none w-full py-6 pl-4 mt-4 border  border-app-gray-9F rounded-xl"}/>
        <Input title={"Province"}  containerStyle={"mt-8"}  inputStyle={"font-[400] outline-none w-full py-6 pl-4 mt-4 border  border-app-gray-9F rounded-xl"}/>
        <Input title={"ZIP code"}  containerStyle={"mt-8"}  inputStyle={"font-[400] outline-none w-full py-6 pl-4 mt-4 border  border-app-gray-9F rounded-xl"}/>
        <Input title={"Phone"}  containerStyle={"mt-8"}  inputStyle={"font-[400] outline-none w-full py-6 pl-4 mt-4 border  border-app-gray-9F rounded-xl"}/>
        <Input title={"Email address"}  containerStyle={"mt-8"}  inputStyle={"font-[400] outline-none w-full py-6 pl-4 mt-4 border  border-app-gray-9F rounded-xl"}/>
        <Input placeholder={"Additional information"} containerStyle={"mt-8"}  inputStyle={"font-[400] outline-none w-full py-6 pl-4 mt-4 border  border-app-gray-9F rounded-xl"}/>
        </form>

        <div className='sm:w-1/4 sm:min-w-[500px]  max-sm:w-full pt-16 flex flex-col'>
        <div className="w-full h-fit flex mb-2 justify-between">
          <span className='font-[400] text-xl'>Product</span>
          <span className='font-[400] text-xl'>Subtotal</span>
        </div>

      {cartItems.map(item=>(
        <div className="w-full h-fit flex my-2 justify-between items-center" key={item.id}>
          {/* TODO buradan link to kullanarak item page ine gönder */}
 <span className='text-app-gray-9F font-[400] max-w-[60%]'>{item.title}  <span className='text-black ml-2'>X</span> <span className='ml-2 text-black'>{item.count}</span></span>
          <span className='font-[300]'>${(item.price*item.count).toFixed(2)}</span>   
        </div>
      ))}  
  
        <div className="w-full h-fit flex mt-6 pb-8 justify-between  border-b">       
          <span className='font-[400]'>Total</span>
          <span className='font-[600] text-2xl text-app-orange'>${orderTotal}</span>   
        </div>

        <div className="w-full h-fit flex flex-col mt-6">       
   <div className='flex'>
   <input type="radio" name='order' />
      <span className='ml-4'>Direct Bank Transfer</span>
   </div>
      <div className="w-full mt-4 font-[300] text-left text-app-gray-9F">
      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
      </div>
      <div className='flex flex-col mt-4'>
        <div className='flex my-2'>
        <input type="radio" name='order' />
        <span className='ml-4 text-app-gray-9F'>Direct Bank Transfer</span>
        </div>
        <div className='flex my-2'>
        <input type="radio" name='order' />
        <span className='ml-4 text-app-gray-9F'>Cash On Delivery</span>
        </div>
      </div>
      <div className="w-full mt-6 font-[300] text-left ">
      Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b className='font-[600]'>privacy policy.</b> 
      </div>
        </div>  

        <button className='mt-16 py-4 w-[60%] m-auto border border-app-black rounded-xl'>Place Order</button>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Checkout