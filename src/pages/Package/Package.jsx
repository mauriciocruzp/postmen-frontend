import {Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import Header from "../../containers/Header/Header";
import Input from "../../components/Input/Input";
import TextError from "../../components/TextError/TextError";

function Package() {
    const navigate = useNavigate();

    const initialValues = {
        weight: '',
        height: '',
        width: '',
    }

    const validationSchema = Yup.object({
        weight: Yup.string()
            .required('Campo vacío'),
        height: Yup.string()
            .required('Campo vacío'),
        width: Yup.string()
            .required('Campo vacío'),
    });

    async function handleSubmit(values) {
        /*
        const response = await (values.weight, values.height, values.width);

        if (response.status === 200){
            navigate('/');
            return;
        }

        alert('Campos incompletos, rellene todos los campos')
        */
    }

    return(
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
                            <div className="col-span-10 col-start-2">
                                <h1 className="pb-2 text-4xl text-left w-full font-bold my-3">Información del paquete</h1>
                                <h3 className="pb-2 text-left w-full font-light">Rellene todos los campos para proceder con el envío del paquete y completar la orden</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="my-4">
                                        <Input type='text' name='weight' placeholder='Peso' 
                                            value={values.weight}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                        />
                                        {errors.weight && touched.weight && (
                                            <TextError>{errors.weight}</TextError>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <Input type='text' name='height' placeholder='Altura'
                                            value={values.height}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                        />
                                        {errors.height && touched.height && (
                                            <TextError>{errors.height}</TextError>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <Input type='text' name='width' placeholder='Ancho'
                                            value={values.width}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                        />
                                        {errors.width && touched.width && (
                                            <TextError>{errors.width}</TextError>
                                        )}
                                    </div>
                                    <div className="my-6 w-full flex flew-row space-x-1">
                                        <Button type="submit" width="w-1/2">Siguiente</Button>
                                        <Button className="primary-purple" type="submit" width="w-1/2">Cancelar</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default Package;