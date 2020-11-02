import {Entity, hasOne, model, property} from '@loopback/repository';
import {Shoppingcart} from './shoppingcart.model';
import {UserCredential} from './user-credential.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;
  index: {
    unique: true
}

  @property({
    type: 'string',
    required: true,
  })
  password?: string;

  @property({
    type: 'string',
    required: true,
    unique: true
  })
  email?: string;

  @hasOne(() => UserCredential)
  userCredential: UserCredential;

  @hasOne(() => Shoppingcart)
  shoppingcart: Shoppingcart;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
