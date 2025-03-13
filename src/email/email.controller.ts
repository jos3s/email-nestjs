import { EmailService } from './email.service';
import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  HttpCode,
} from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { Email } from './entities/email.entity';

@Controller('email')
export class EmailController {
  constructor(private readonly EmailService: EmailService) {}
  @Post()
  async create(@Body() createEmailDto: CreateEmailDto): Promise<Email> {
    const email: Email = await this.EmailService.create(createEmailDto);

    return email;
  }

  @Get()
  findAll() {
    return this.EmailService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params: { id: number }) {
    const email: Email | null = await this.EmailService.findOne(+params.id);
    return email;
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param() params: { id: number }) {
    await this.EmailService.remove(params.id);
  }
}
