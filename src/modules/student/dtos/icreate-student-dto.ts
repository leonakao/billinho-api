import {
  IsDate,
  MaxLength,
  IsNotEmpty,
  IsOptional,
  IsIn,
  Validate,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { TransformToDate } from 'src/shared/utils';
import { PaymentTypes } from '../enums/payment-types.enum';
import { CpfUnique } from '../rules/cpf-unique';

export class ICreateStudentDTO {
  @IsNotEmpty()
  name: string;

  @MaxLength(15)
  @IsNotEmpty()
  @Validate(CpfUnique)
  cpf: string;

  @Transform(({ value }) => TransformToDate(value))
  @IsDate()
  @IsOptional()
  birthdate: Date;

  @IsIn(Object.values(PaymentTypes))
  @IsNotEmpty()
  payment_method: string;
}
