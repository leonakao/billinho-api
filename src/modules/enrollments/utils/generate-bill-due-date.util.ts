import { addMonths, getDaysInMonth } from 'date-fns';
import { setDate } from 'date-fns/esm';

export function GenerateBillDueDate(due_day: number, currentInstallment = 1) {
  let dueDate = new Date();

  if (dueDate.getDate() > due_day) {
    dueDate = addMonths(dueDate, 1);
  }

  dueDate = addMonths(dueDate, currentInstallment - 1);

  dueDate =
    getDaysInMonth(dueDate) <= due_day
      ? setDate(dueDate, getDaysInMonth(dueDate))
      : setDate(dueDate, due_day);

  return dueDate;
}
