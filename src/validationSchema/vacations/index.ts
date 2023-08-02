import * as yup from 'yup';

export const vacationValidationSchema = yup.object().shape({
  days_taken: yup.number().integer().required(),
  employee_id: yup.string().nullable().required(),
});
