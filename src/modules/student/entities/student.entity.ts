import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column('date')
  birthdate: Date;

  @Column()
  payment_method: string;

  @CreateDateColumn()
  created_at: Date;
}
