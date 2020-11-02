import React, { useEffect } from 'react'
import styles from './order.module.scss'
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from '../checkoutproduct';
import useStore from '../../stores/useStore';
interface OrderItem{
  productId?: string
  name?:string
  total?:number
  quantity?:number
  orderId?:string
}
const Order =(props:OrderItem )=> {
  const {cartStore} = useStore();
  // useEffect(() => {
  //   cartStore.getCart();
  // }, [cartStore])

  const {productStore} = useStore();
  useEffect(() => {
    cartStore.getCart();
    console.log(cartStore.carts);
  }, [cartStore])
  return (
      <div className={styles.order}>
          <h2>Order</h2>
          <p className={styles.id}>
              <small>{cartStore.orderId}</small>
          </p>
          {Array.isArray(cartStore.carts)&&cartStore.carts.map((item,index)=>{
              <CheckoutProduct
                id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
                rating={item.rating}
               hideButton
              />
            })}
          <CurrencyFormat
              renderText={(value:any) => (
                  <h3 className={styles.total}>Order Total: {value}</h3>
              )}
              decimalScale={2}
              value={cartStore.carts.price / 100}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
          />   
      </div>
  )
}
export default Order