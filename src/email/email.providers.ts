import { Email } from './entities/email.entity';
import { DataSource } from 'typeorm';

export const emailProviders = [
  {
    provide: 'EMAIL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Email),
    inject: ['DATA_SOURCE'],
  },
];
