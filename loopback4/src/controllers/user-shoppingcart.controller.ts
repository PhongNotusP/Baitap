import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  User,
  Shoppingcart,
} from '../models';
import {UserRepository} from '../repositories';

export class UserShoppingcartController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/shoppingcart', {
    responses: {
      '200': {
        description: 'User has one Shoppingcart',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Shoppingcart),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Shoppingcart>,
  ): Promise<Shoppingcart> {
    return this.userRepository.shoppingcart(id).get(filter);
  }

  @post('/users/{id}/shoppingcart', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Shoppingcart)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Shoppingcart, {
            title: 'NewShoppingcartInUser',
            exclude: ['id'],
            optional: ['userId']
          }),
        },
      },
    }) shoppingcart: Omit<Shoppingcart, 'id'>,
  ): Promise<Shoppingcart> {
    return this.userRepository.shoppingcart(id).create(shoppingcart);
  }

  @patch('/users/{id}/shoppingcart', {
    responses: {
      '200': {
        description: 'User.Shoppingcart PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Shoppingcart, {partial: true}),
        },
      },
    })
    shoppingcart: Partial<Shoppingcart>,
    @param.query.object('where', getWhereSchemaFor(Shoppingcart)) where?: Where<Shoppingcart>,
  ): Promise<Count> {
    return this.userRepository.shoppingcart(id).patch(shoppingcart, where);
  }

  @del('/users/{id}/shoppingcart', {
    responses: {
      '200': {
        description: 'User.Shoppingcart DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Shoppingcart)) where?: Where<Shoppingcart>,
  ): Promise<Count> {
    return this.userRepository.shoppingcart(id).delete(where);
  }
}
