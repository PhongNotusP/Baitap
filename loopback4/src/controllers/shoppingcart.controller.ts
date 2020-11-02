import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Shoppingcart} from '../models';
import {ShoppingcartRepository} from '../repositories';

export class ShoppingcartController {
  constructor(
    @repository(ShoppingcartRepository)
    public shoppingcartRepository : ShoppingcartRepository,
  ) {}

  @post('/shoppingcarts', {
    responses: {
      '200': {
        description: 'Shoppingcart model instance',
        content: {'application/json': {schema: getModelSchemaRef(Shoppingcart)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Shoppingcart, {
            title: 'NewShoppingcart',
            exclude: ['id'],
          }),
        },
      },
    })
    shoppingcart: Omit<Shoppingcart, 'id'>,
  ): Promise<Shoppingcart> {
    return this.shoppingcartRepository.create(shoppingcart);
  }

  @get('/shoppingcarts/count', {
    responses: {
      '200': {
        description: 'Shoppingcart model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Shoppingcart) where?: Where<Shoppingcart>,
  ): Promise<Count> {
    return this.shoppingcartRepository.count(where);
  }

  @get('/shoppingcarts', {
    responses: {
      '200': {
        description: 'Array of Shoppingcart model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Shoppingcart, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Shoppingcart) filter?: Filter<Shoppingcart>,
  ): Promise<Shoppingcart[]> {
    return this.shoppingcartRepository.find(filter);
  }

  @patch('/shoppingcarts', {
    responses: {
      '200': {
        description: 'Shoppingcart PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Shoppingcart, {partial: true}),
        },
      },
    })
    shoppingcart: Shoppingcart,
    @param.where(Shoppingcart) where?: Where<Shoppingcart>,
  ): Promise<Count> {
    return this.shoppingcartRepository.updateAll(shoppingcart, where);
  }

  @get('/shoppingcarts/{id}', {
    responses: {
      '200': {
        description: 'Shoppingcart model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Shoppingcart, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Shoppingcart, {exclude: 'where'}) filter?: FilterExcludingWhere<Shoppingcart>
  ): Promise<Shoppingcart> {
    return this.shoppingcartRepository.findById(id, filter);
  }

  @patch('/shoppingcarts/{id}', {
    responses: {
      '204': {
        description: 'Shoppingcart PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Shoppingcart, {partial: true}),
        },
      },
    })
    shoppingcart: Shoppingcart,
  ): Promise<void> {
    await this.shoppingcartRepository.updateById(id, shoppingcart);
  }

  @put('/shoppingcarts/{id}', {
    responses: {
      '204': {
        description: 'Shoppingcart PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() shoppingcart: Shoppingcart,
  ): Promise<void> {
    await this.shoppingcartRepository.replaceById(id, shoppingcart);
  }

  @del('/shoppingcarts/{id}', {
    responses: {
      '204': {
        description: 'Shoppingcart DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.shoppingcartRepository.deleteById(id);
  }
}
