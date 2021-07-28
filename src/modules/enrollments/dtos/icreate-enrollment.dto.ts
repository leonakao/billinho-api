import { IsNotEmpty, IsInt, Min, Max, Validate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { StudentUnique } from '../rules/student-unique';

export class ICreateEnrollmentDTO {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  amount: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  @Min(2)
  installments: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(31)
  due_day: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  @Validate(StudentUnique)
  student_id: number;
}
