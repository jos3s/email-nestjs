import { emailProviders } from './email.providers';
import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EmailController],
  providers: [...emailProviders, EmailService],
})
export class EmailModule {}
