import {Entity, model, property} from '@loopback/repository';

@model()
export class Product extends Entity {
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
  name?: string;

  @property({
    type: 'number',
    required: true,
  })
  price?: number;

  @property({
    type: 'string',
    required: true,
  })
  image?: string;

  @property({
    type: 'string',
    required: true,
  })
  title?: string;

  @property({
    type: 'string',
    required: true,
  })
  description?: string;



  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
