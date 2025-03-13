import PostgresDataSource from './datasource';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = PostgresDataSource;
      return dataSource.initialize();
    },
  },
];
