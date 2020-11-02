import {DefaultCrudRepository} from '@loopback/repository';
import {Shoppingcart, ShoppingcartRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ShoppingcartRepository extends DefaultCrudRepository<
  Shoppingcart,
  typeof Shoppingcart.prototype.id,
  ShoppingcartRelations
> {
  constructor(
    @inject('datasources.Mongo') dataSource: MongoDataSource,
  ) {
    super(Shoppingcart, dataSource);
  }
}
