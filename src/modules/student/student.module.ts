import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../shared/database/database.module';
import { studentProviders } from './providers/student.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...studentProviders],
})
export class StudentModule {}
