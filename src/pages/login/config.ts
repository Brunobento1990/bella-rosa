import * as Yup from 'yup';

export const initialValues = {
  email: "",
  password: "",
  submit: null,
};

export const validationSchema = Yup.object({
    email: Yup
      .string()
      .email('E-mail inválido')
      .max(255, 'Campo com o máximo de 255 caracteres')
      .required('E-mail é obrigatório'),
    password: Yup
      .string()
      .max(255)
      .required('Senha é obrigatório')
  })
