import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../shared/database/database.module';
import { EnrollmentController } from './controllers/enrollment.controller';
import { enrollmentProviders } from './providers/enrollment.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...enrollmentProviders],
  controllers: [EnrollmentController],
})
export class EnrollmentModule {}
