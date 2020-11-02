import React, { useState } from "react";
import styles from "./product.module.scss";
import useStore from "../../stores/useStore";
import { observer } from 'mobx-react'

interface Product {
  id?: string;
  title?: string;
  image?: string;
  price?: number;
  rating?: number;
}
function Product(props: Product) {
  const { id, title, image, price, rating } = props;
  console.log(props);
  const { cartStore, productStore } = useStore();
  console.log(cartStore);
  console.log(cartStore.addOrder);
  const cartProduct = [{
    id
  }];
  console.log(cartProduct);

  return (
    <div className={styles.product}>
      <div className={styles.info}>
        <p>{title}</p>
        <p className={styles.price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.rating}>
          {Array(rating).map((_) => {
            <p>🌟</p>;
          })}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={() => cartStore.addCart(cartProduct)}>
        Add to Cart
      </button>
    </div>
  );
}
export default observer(Product);
