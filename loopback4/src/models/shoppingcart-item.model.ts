import {Entity, model, property} from '@loopback/repository';

@model()
export class ShoppingcartItem extends Entity {
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
  productId: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;


  constructor(data?: Partial<ShoppingcartItem>) {
    super(data);
  }
}

export interface ShoppingcartItemRelations {
  // describe navigational properties here
}

export type ShoppingcartItemWithRelations = ShoppingcartItem & ShoppingcartItemRelations;
