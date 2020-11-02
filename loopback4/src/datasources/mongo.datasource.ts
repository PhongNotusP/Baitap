import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongo',
  connector: 'mongodb',
  url: 'mongodb+srv://shoppingtest:Shoppingtest@cluster0.hdrut.mongodb.net/shopping?authSource=admin&replicaSet=atlas-diq7h6-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
  host: '127.0.0.1',
  port: 27017,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

@lifeCycleObserver('datasource')
export class MongoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Mongo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Mongo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
