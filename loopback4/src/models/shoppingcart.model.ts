import {Entity, model, property} from '@loopback/repository';
import {ShoppingcartItem} from './shoppingcart-item.model';

@model()
export class Shoppingcart extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
    required: true,
  })
  productId: string;


  @property.array(ShoppingcartItem)
  items?: ShoppingcartItem[];
  constructor(data?: Partial<Shoppingcart>) {
    super(data);
  }
}

export interface ShoppingcartRelations {
  // describe navigational properties here
}

export type ShoppingcartWithRelations = Shoppingcart & ShoppingcartRelations;
