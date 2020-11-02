import { action, observable,computed } from 'mobx'

interface ICart{
  orderId?: string
  date?: string
  fullName?: string
  total?: number
  productId?:string
  name?: string
  price?: number
  image?: string
  description?: string
  details?: string
}
class cartStore{
  rootStore:unknown
  constructor(rootStore){
    this.rootStore = rootStore
  }
  @observable carts: ICart[]= []
  @computed get count(){
    return this.carts.length;
  }
  @computed get totalAmount(){
    let total = 0
    for( let item of this.carts){
      total = total + item.price
    }
    return total
  }
  @action 
 public async getCart(){
    const res = await fetch('http://[::1]:3000/shoppingcarts');
    const {carts} = await res.json();
    this.carts = carts
  }
  @action public async addCart(){
    await fetch('http://[::1]:3000/shoppingcarts/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.carts)
    });
    this.getCart();
    // const res = await fetch('http://[::1]:3000/shoppingcarts');
    // const {carts} = await res.json();
    // this.carts.push(carts)
    // this.getCart();
  }
}
export default cartStore
