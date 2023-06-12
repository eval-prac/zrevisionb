import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 7813,
};

export const sampleWithPartialData: IEmployee = {
  id: 94038,
  lastName: 'Rodriguez',
  email: 'Adenet.Cousin@yahoo.fr',
  hireDate: dayjs('2023-06-12T14:13'),
  commissionPct: 14006,
};

export const sampleWithFullData: IEmployee = {
  id: 50464,
  firstName: 'Yves',
  lastName: 'Roger',
  email: 'Mdric97@gmail.com',
  phoneNumber: 'Liban',
  hireDate: dayjs('2023-06-11T17:12'),
  salary: 20712,
  commissionPct: 36931,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
