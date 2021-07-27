import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { IStudentRepository } from '../repositories/istudent.repository';

@ValidatorConstraint({ name: 'CpfUnique', async: true })
@Injectable()
export class CpfUnique implements ValidatorConstraintInterface {
  constructor(
    @Inject('StudentRepository')
    private repository: IStudentRepository,
  ) {}

  async validate(cpf: string) {
    try {
      await this.repository.findByCpf(cpf);
    } catch (e) {
      return true;
    }

    return false;
  }

  defaultMessage() {
    return `Already exists a student with this cpf`;
  }
}
