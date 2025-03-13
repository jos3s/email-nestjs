import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Email } from 'src/email/entities/email.entity';
import { CreateEmailDto } from 'src/email/dto/create-email.dto';

@Injectable()
export class EmailService {
  constructor(
    @Inject('EMAIL_REPOSITORY')
    private emailRepository: Repository<Email>,
  ) {}

  async create(createTesteDto: CreateEmailDto): Promise<Email> {
    const email: Email = new Email(
      createTesteDto.emailFrom,
      createTesteDto.emailTo,
      createTesteDto.subject,
      createTesteDto.body,
    );

    await this.emailRepository.save(email);
    return email;
  }

  findAll() {
    return this.emailRepository.find();
  }

  async findOne(id: number): Promise<Email | null> {
    return await this.emailRepository.findOneBy({
      id: id,
    });
  }

  // update(id: number, updateTesteDto: UpdateTesteDto) {
  //   return `This action updates a #${id} teste`;
  // }

  async remove(id: number) {
    const email = await this.emailRepository.findOneBy({
      id: id,
    });

    if (email !== null) await this.emailRepository.remove(email);
  }
}
