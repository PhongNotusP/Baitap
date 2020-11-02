import {DefaultCrudRepository} from '@loopback/repository';
import {UserCredential, UserCredentialRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserCredentialRepository extends DefaultCrudRepository<
  UserCredential,
  typeof UserCredential.prototype.id,
  UserCredentialRelations
> {
  constructor(
    @inject('datasources.Mongo') dataSource: MongoDataSource,
  ) {
    super(UserCredential, dataSource);
  }
}
