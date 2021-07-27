import { Type } from 'class-transformer';
import { IsNotEmpty, IsInt, Min, IsIn, IsDate } from 'class-validator';
import { BillStatusTypes } from '../enums/bill-status-types.enum';

export class ICreateBillDTO {
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  amount: number;

  @Type(() => Date)
  @IsNotEmpty()
  @IsDate()
  due_date: Date;

  @IsIn(Object.values(BillStatusTypes))
  @IsNotEmpty()
  status: string;
}
