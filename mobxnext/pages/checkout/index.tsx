import { isObject } from 'util';
import CheckoutProduct from '../../components/checkoutproduct';
import Header from '../../components/Header'
import useStore from '../../stores/useStore'

const Checkout=()=> {
  const {checkoutStore} = useStore();
  console.log(checkoutStore);
  checkoutStore.getCheckout();
  console.log(checkoutStore.checkouts);
  return (
    <div>
      <Header/>
    <h2>Your shopping</h2>
    {Array.isArray(checkoutStore.checkouts)&&checkoutStore.checkouts.map((item,index)=>{
    return(
      <CheckoutProduct title={item.title}
      image={item.image}
      price={item.price}
      rating={item.rating}
       /> 
    )})}
    </div>
  )
}
export default Checkout