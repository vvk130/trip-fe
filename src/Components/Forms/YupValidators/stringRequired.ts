import * as yup from 'yup';

const stringRequired = (fieldName: string) => {
  return yup
    .string()
    .trim()
    .max(100)
    .required(`${fieldName} is required`);
};

export default stringRequired;