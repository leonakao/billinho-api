import { addMonths, getDaysInMonth } from 'date-fns';
import { setDate } from 'date-fns/esm';

export function GenerateBillDate(due_day: number, currentInstallment = 1) {
  let baseDate = new Date();

  if (baseDate.getDate() > due_day) {
    baseDate = addMonths(baseDate, 1);
  }

  baseDate =
    getDaysInMonth(baseDate) < due_day
      ? setDate(baseDate, getDaysInMonth(baseDate))
      : setDate(baseDate, due_day);

  return addMonths(baseDate, currentInstallment - 1);
}
