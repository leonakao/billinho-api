import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'CpfValid', async: false })
@Injectable()
export class CpfValid implements ValidatorConstraintInterface {
  async validate(cpf: string) {
    if (typeof cpf !== 'string') {
      return false;
    }

    cpf = cpf.replace(/[\s.-]*/gim, '');

    if (
      cpf.length != 11 ||
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999'
    ) {
      return false;
    }

    let add = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      add = add + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (add * 10) % 11;

    if (remainder == 10 || remainder == 11) {
      remainder = 0;
    }

    if (remainder != parseInt(cpf.substring(9, 10))) {
      return false;
    }

    add = 0;

    for (let i = 1; i <= 10; i++) {
      add = add + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (add * 10) % 11;

    if (remainder == 10 || remainder == 11) {
      remainder = 0;
    }

    if (remainder != parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;
  }

  defaultMessage() {
    return `Cpf is invalid`;
  }
}
