import { useFormik } from "formik";
import { InputCustom } from "../../components/input";
import { ContainerPage } from "../../layout/styles";
import * as S from "./styles";
import * as config from "./config";
import { ButtonCustom } from "../../components/buuton";
import { useApi } from "../../hooks/use-api";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { post } = useApi();
  const navige = useNavigate();
  const formik = useFormik({
    initialValues: config.initialValues,
    validationSchema: config.validationSchema,
    onSubmit: (values, helpers) => submit(values, helpers),
  });

  async function submit(values: any, helpers: any) {
    try {
      await post("login-client", values);
      navige('/')
    } catch (err: any) {
      helpers.setStatus({ success: false });
      helpers.setErrors({ submit: err.message });
      helpers.setSubmitting(false);
    }
  }

  console.log(formik.values);

  return (
    <ContainerPage>
      <S.ContainerInputsLogin onSubmit={formik.handleSubmit}>
        <InputCustom
          id="email"
          name="email"
          helperText={formik.touched.email && formik.errors.email}
          error={!!(formik.touched.email && formik.errors.email)}
          label="E-mail"
          fullWidth
          type="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <InputCustom
          id="password"
          name="password"
          helperText={formik.touched.password && formik.errors.password}
          error={!!(formik.touched.password && formik.errors.password)}
          label="Senha"
          fullWidth
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <ButtonCustom />
      </S.ContainerInputsLogin>
    </ContainerPage>
  );
}
