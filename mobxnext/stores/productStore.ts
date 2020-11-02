import { action, observable } from 'mobx'

interface IProduct {
  productId?:string
  name?: string
  price?: number
  image?: string
  description?: string
  details?: string
}

class productStore {
  rootStore: unknown
  constructor(rootStore){
    this.rootStore = rootStore
  }

  @observable products: IProduct[] = [ ]

  @action 
 public async getProduct(){
    const res = await fetch('http://[::1]:3000/products/');
    const products = await res.json();
    this.products= products
  }
  @action public async addProduct(products){
    await fetch('http://[::1]:3000/products/',{
      method: 'POST',
      body:products
    });
    this.getProduct();
  }
  @action public async addCart(products){
    await fetch('http://[::1]:3000/shopping-carts/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(products)
    });
    this.getProduct();
}
}
export default productStore
