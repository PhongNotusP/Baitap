import React, { useEffect } from "react";
import {inject} from 'mobx-react'
import styles from "./checkoutproduct.module.scss";
import useStore from "../../stores/useStore";
interface CheckoutProduct {
  id?: string;
  title?: string;
  image?: string;
  price?: number;
  rating?: number;
  hideButton?: boolean;
}

function CheckoutProduct(props:CheckoutProduct){
  const { id, title, image, price, rating, hideButton } = props;
  const {productStore} = useStore();
  console.log(productStore);
  useEffect(() => {
    productStore.getProduct();
    console.log(productStore.products);
  }, [productStore])
  return (
    <div className={styles.product}>
      <img className={styles.image} src={image} />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.rating}>
          {Array(rating)
            .map((_) => {
              <p>🌟</p>;
            })}
        </div>
      </div>
      {!hideButton && (
        <button >
          Remove Item
        </button>
      )}
    </div>
  )
}
export default CheckoutProduct