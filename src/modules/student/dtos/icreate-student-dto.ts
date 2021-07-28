import {
  IsDate,
  MaxLength,
  IsNotEmpty,
  IsOptional,
  IsIn,
  Validate,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { TransformToDate } from '../../../shared/utils';
import { PaymentTypes } from '../enums/payment-types.enum';
import { CpfUnique, CpfValid } from '../rules';

export class ICreateStudentDTO {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @MaxLength(15)
  @IsNotEmpty()
  @Validate(CpfUnique)
  @Validate(CpfValid)
  cpf: string;

  @ApiProperty()
  @Transform(({ value }) => TransformToDate(value))
  @IsDate()
  @IsOptional()
  birthdate: Date;

  @ApiProperty()
  @IsIn(Object.values(PaymentTypes))
  @IsNotEmpty()
  payment_method: string;
}
