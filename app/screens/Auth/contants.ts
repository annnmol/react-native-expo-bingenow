import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required().min(2).max(10).label("Name"),
  email: Yup.string().required().email().min(4).label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  // select: Yup.string().required().min(1, 'Field is required').notOneOf(['0'], 'Field is required').label("Gender"),
  // age: Yup.number().required().min(3).max(24).transform(value => (isNaN(value) ? undefined : value)).label("Age"),
});
export const LoginSchema = Yup.object().shape({
  email: Yup.string().required().email().min(4).label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
