import { parse } from 'date-fns';

export function TransformToDate(date: string, format = 'dd/mm/yyyy') {
  return parse(date, format, new Date());
}
