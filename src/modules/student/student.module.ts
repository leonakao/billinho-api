import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../shared/database/database.module';
import { StudentController } from './controllers/student.controller';
import { ruleProviders, studentProviders } from './providers';

@Module({
  imports: [DatabaseModule],
  providers: [...studentProviders, ...ruleProviders],
  controllers: [StudentController],
})
export class StudentModule {}
