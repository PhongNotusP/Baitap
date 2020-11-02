import { action, observable } from 'mobx'

interface ICheckout{
  productId?: string
  name?: string
  quantity?: number
  price?: number
}
class checkoutStore{
  rootStore:unknown
  constructor(rootStore){
    this.rootStore = rootStore
  }
  @observable checkouts: ICheckout[]= []
  @action 
 public async getCheckout(){
    const res = await fetch('http://[::1]:3000/shopping-carts');
    const {checkouts} = await res.json();
    this.checkouts = checkouts
  }
}
export default checkoutStore
