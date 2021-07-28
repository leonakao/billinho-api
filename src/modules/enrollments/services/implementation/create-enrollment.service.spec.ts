import { CreateEnrollmentService } from './create-enrollment.service';

describe('CreateEnrollment', () => {
  let createEnrollmentService: CreateEnrollmentService;

  beforeEach(async () => {
    const fakeEnrollmentRepository = {
      save: jest.fn((enrollment) => ({ id: 1, ...enrollment })),
      list: jest.fn(),
      findByStudent: jest.fn(),
    };

    const fakeBillRepository = { saveMany: jest.fn() };

    createEnrollmentService = new CreateEnrollmentService(
      fakeEnrollmentRepository,
      fakeBillRepository,
    );
  });

  it('should be able to create a new enrollment', async () => {
    const enrollment = await createEnrollmentService.execute({
      amount: 120000,
      installments: 3,
      due_day: 5,
      student_id: 1,
    });

    expect(enrollment).toHaveProperty('id');
  });

  it('should be able to auto generate the bills', async () => {
    const enrollment = await createEnrollmentService.execute({
      amount: 120000,
      installments: 3,
      due_day: 5,
      student_id: 1,
    });

    expect(enrollment).toHaveProperty('bills');
  });

  it('should generate total bills equal installments value', async () => {
    const installments = 3;

    const enrollment = await createEnrollmentService.execute({
      amount: 120000,
      installments,
      due_day: 5,
      student_id: 1,
    });

    expect(enrollment.bills.length).toBe(installments);
  });

  it('should sum of bills amount equal enrollment amount', async () => {
    const amount = 120000;

    const enrollment = await createEnrollmentService.execute({
      amount,
      installments: 3,
      due_day: 5,
      student_id: 1,
    });

    const reducer = (accumulator, bill) => accumulator + bill.amount;
    const sumOfBills = enrollment.bills.reduce(reducer, 0);

    expect(sumOfBills).toBe(amount);
  });
});
