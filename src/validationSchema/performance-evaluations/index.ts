import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation: yup.string().required(),
  evaluation_date: yup.date().required(),
  employee_id: yup.string().nullable().required(),
});
