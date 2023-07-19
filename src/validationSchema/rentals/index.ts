import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  rental_date: yup.date().required(),
  return_date: yup.date(),
  tool_id: yup.string().nullable().required(),
  outlet_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
