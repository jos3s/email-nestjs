import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  emailFrom: string;

  @Column({ length: 500 })
  emailTo: string;

  @Column({ length: 500 })
  subject: string;

  @Column('text')
  body: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(
    emailFrom: string,
    emailTo: string,
    subject: string,
    body: string,
  ) {
    this.emailFrom = emailFrom;
    this.emailTo = emailTo;
    this.subject = subject;
    this.body = body;
  }
}
