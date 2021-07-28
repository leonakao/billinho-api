import { IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class ICreateEnrollmentDTO {
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  amount: number;

  @IsInt()
  @IsNotEmpty()
  @Min(2)
  installments: number;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(31)
  due_day: number;

  @IsInt()
  @IsNotEmpty()
  student_id: number;
}
