import { DataSource } from 'typeorm';

const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'nestjs',
  password: 'root',
  database: 'nestjs',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../src/migrations/'],
  migrationsTableName: 'nestjs_migration_table',
  synchronize: true,
});

export default PostgresDataSource;
