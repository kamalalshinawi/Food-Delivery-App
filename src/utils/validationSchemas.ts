import * as yup from 'yup';

export const signInSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .email('Enter a valid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export const signUpSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required('Full name is required')
    .min(3, 'Full name must be at least 3 characters'),
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .email('Enter a valid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Must contain at least one number'),
});

export type SignInValues = yup.InferType<typeof signInSchema>;
export type SignUpValues = yup.InferType<typeof signUpSchema>;
