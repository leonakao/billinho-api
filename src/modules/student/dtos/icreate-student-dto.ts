import {
  IsDate,
  MaxLength,
  IsNotEmpty,
  IsOptional,
  IsIn,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { TransformToDate } from 'src/shared/utils';
import { PaymentTypes } from '../enums/payment-types.enum';

export class ICreateStudentDTO {
  @IsNotEmpty()
  name: string;

  @MaxLength(15)
  @IsNotEmpty()
  cpf: string;

  @Transform(({ value }) => TransformToDate(value))
  @IsDate()
  @IsOptional()
  birthdate: Date;

  @IsIn(Object.values(PaymentTypes))
  @IsNotEmpty()
  payment_method: string;
}
