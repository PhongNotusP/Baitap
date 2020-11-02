import { observable } from "mobx";
import checkoutStore from "./checkoutStore";
import cartStore from "./cartStore";
import productStore from "./productStore";
import userStore from "./userStore";
const isServer = typeof window === "undefined";


let store = null;
export default function initializeStore(){
  if(isServer){
    return {
      productStore: new productStore(this),
      cartStore: new cartStore(this),
      checkoutStore: new checkoutStore(this),
      userStore: new userStore(this)
    }
  }if(store === null){
    store={
      productStore: new productStore(this),
      cartStore: new cartStore(this),
      checkoutStore: new checkoutStore(this),
      userStore: new userStore(this)
    }
  }
  return store
}