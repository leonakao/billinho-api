import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../shared/database/database.module';
import { EnrollmentController } from './controllers/enrollment.controller';
import { enrollmentProviders, ruleProviders } from './providers';

@Module({
  imports: [DatabaseModule],
  providers: [...enrollmentProviders, ...ruleProviders],
  controllers: [EnrollmentController],
})
export class EnrollmentModule {}
