import * as yup from 'yup';
const SurnameRules = /^[a-z]+$/;
// Only amall letter allowed for Surname.
const passwordRules =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit & 1 Special character needed.

export const loginSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup.string().required('Required'),
});

export const registerSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(3, 'First Name must be at least 3 characters long.')
    .max(20, "First Name can't be more than 20 characters.")
    .required('Required'),
  surname: yup
    .string()
    .min(3, 'Surname must be at least 3 characters long.')
    .matches(SurnameRules, {
      message: 'Surname must be small letter.',
    })
    .max(20, "Surrname can't be more than 20 characters.")
    .required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message: 'Must include A-Z, a-z, 0-9, one @$!%*#?&',
    })
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords not matched.')
    .required('Required'),
});
