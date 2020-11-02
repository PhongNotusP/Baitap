import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {User, UserRelations, UserCredential, Shoppingcart} from '../models';
import {MongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserCredentialRepository} from './user-credential.repository';
import {ShoppingcartRepository} from './shoppingcart.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly userCredential: HasOneRepositoryFactory<UserCredential, typeof User.prototype.id>;

  public readonly shoppingcart: HasOneRepositoryFactory<Shoppingcart, typeof User.prototype.id>;

  constructor(
    @inject('datasources.Mongo') dataSource: MongoDataSource, @repository.getter('UserCredentialRepository') protected userCredentialRepositoryGetter: Getter<UserCredentialRepository>, @repository.getter('ShoppingcartRepository') protected shoppingcartRepositoryGetter: Getter<ShoppingcartRepository>,
  ) {
    super(User, dataSource);
    this.shoppingcart = this.createHasOneRepositoryFactoryFor('shoppingcart', shoppingcartRepositoryGetter);
    this.registerInclusionResolver('shoppingcart', this.shoppingcart.inclusionResolver);
    this.userCredential = this.createHasOneRepositoryFactoryFor('userCredential', userCredentialRepositoryGetter);
    this.registerInclusionResolver('userCredential', this.userCredential.inclusionResolver);
  }
}
