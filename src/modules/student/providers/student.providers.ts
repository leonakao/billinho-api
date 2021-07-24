import { Connection, Repository } from 'typeorm';
import { Student } from '../entities/student.entity';

export const studentProviders = [
  {
    provide: 'STUDENT_REPOSITORY',
    useFactory: (connection: Connection): Repository<Student> =>
      connection.getRepository(Student),
    inject: ['DATABASE_CONNECTION'],
  },
];
