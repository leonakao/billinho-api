import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { IStudentsRepository } from '../repositories/istudents.repository';

@ValidatorConstraint({ name: 'CpfUnique', async: true })
@Injectable()
export class CpfUnique implements ValidatorConstraintInterface {
  constructor(
    @Inject('StudentsRepository')
    private repository: IStudentsRepository,
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
