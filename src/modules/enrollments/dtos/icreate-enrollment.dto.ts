import { IsNotEmpty, IsInt, Min, Max, Validate } from 'class-validator';
import { StudentUnique } from '../rules/student-unique';

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
  @Validate(StudentUnique)
  student_id: number;
}
