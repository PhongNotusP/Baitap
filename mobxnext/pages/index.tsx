
import Product from '../components/Product'
import Header from '../components/Header'
import useStore from '../stores/useStore';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react'

function Home() {
  const {productStore} = useStore();
  console.log(productStore);
  useEffect(() => {
    productStore.getProduct();
    console.log(productStore.products);
  }, [productStore])

  return (
    <div >
      <Header/>
      {Array.isArray(productStore.products)&&productStore.products.map((item,index)=>{
        return( 
          <Product key={index} title={item.description} 
          image ={item.image}
          price={item.price}
          rating={item.rating} />
        )
      })}
    </div>
  )
}
export default observer(Home)