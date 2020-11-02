
import { useEffect, useState } from 'react';
import Header from '../../components/Header'
import Order from '../../components/Order';
import useStore from '../../stores/useStore'
import { observer } from "mobx-react";

const Orders=()=> {
  const {cartStore} = useStore();
  useEffect(()=>{
    cartStore.getCart();
  },[])
  console.log(cartStore);
  const [orders, setOrders] = useState([]);

  return (
    <div >
      <Header/>
      <h1>Your Orders</h1>
        <Order  />
    </div>
  )
}
export default observer(Orders)