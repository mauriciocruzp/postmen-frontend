import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import TextError from "../../components/TextError/TextError";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Header from "../../containers/Header/Header";
import { signIn } from "../../api/services/auth";

function Login() {
    const { setAccessToken, authState } = useAuth();

  useEffect(() => {
    if (authState.accessToken) {
      navigate('/');
    }
  }, []);

    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Correo electronico invalido')
            .required('Correo electronico requerido'),
        password: Yup.string().required('Contraseña requerida'),
    });

    async function handleSubmit(values) {
        const response = await signIn(values.email, values.password);
        console.log(response);

        if (response.status === 200) {
            setAccessToken(response.data.token);
            alert('Inicio de sesion exitoso');
            navigate('/');
            return;
        }

        alert('Usuario o contraseña incorrectos');
    }
    return (
        <>
            <Header />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <div className="container mx-auto mt-32">
                        <div className="grid grid-cols-12 gap-x-4">
                            <div className="col-span-6 col-start-4">
                                <h1 className='pb-2 text-4xl w-full text-center font-bold my-3'>Inicia Sesión</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="my-4">
                                        <Input type='email' name='email' placeholder='Correo electronico'
                                            value={values.email}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur} />
                                        {errors.email && touched.email && (
                                            <TextError>{errors.email}</TextError>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <Input type='password' name='password' placeholder='Contraseña'
                                            value={values.password}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur} />
                                        {errors.password && touched.password && (
                                            <TextError>{errors.password}</TextError>
                                        )}
                                    </div>
                                    <div className="my-6">
                                        <Button type="submit" width="w-full">Iniciar sesión</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
}

export default Login;