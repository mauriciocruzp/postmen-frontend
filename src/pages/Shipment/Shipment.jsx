import {Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import Header from "../../containers/Header/Header";
import Input from "../../components/Input/Input";
import TextError from "../../components/TextError/TextError";

function Shipment () {

    const navigate = useNavigate();

    const initialValues = {
        address: '',
        city: '',
        state: '',
        postalCode: '',
        shipTo: '',
        associatedEmail: '',
    }

    const validationSchema = Yup.object({
        address: Yup.string()
            .address('Campo vacío')
            .required('Campo vacío'),
        city: Yup.string()
            .city('Campo vacío')
            .required('Campo vacío'),
        state: Yup.string()
            .state('Campo vacío')
            .required('Campo vacío'),
        postalCode: Yup.string()
            .postalCode('Campo vacío')
            .required('Campo vacío'),
        shipTo: Yup.string()
            .shipTo('Campo vacío')
            .required('Campo vacío'),
        associatedEmail: Yup.string()
            .associatedEmail('Campo vacío')
            .required('Campo vacío'),
    });

    async function handleSubmit(values){
        /*
        const response = await (values.address, values.city, values.state, values.postalCode, values.shipTo, values.associatedEmail);

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
                            <h1 className="pb-2 text-4xl text-left w-full font-bold my-3">Información de envío</h1>
                            <h3 className="pb-2 text-left w-full font-light">Rellene todos los campos para proceder con el envío</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="my-4">
                                    <Input type='text' name='address' placeholder='Dirección' 
                                        value={values.address}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                    />
                                    {errors.address && touched.address && (
                                        <TextError>{errors.address}</TextError>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <Input type='text' name='city' placeholder='Ciudad'
                                        value={values.city}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                    />
                                    {errors.city && touched.city && (
                                        <TextError>{errors.city}</TextError>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <Input type='text' name='state' placeholder='Estado'
                                        value={values.state}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                    />
                                    {errors.state && touched.state && (
                                        <TextError>{errors.state}</TextError>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <Input type='text' name='postalCode' placeholder='Código postal'
                                        value={values.postalCode}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                    />
                                    {errors.postalCode && touched.postalCode && (
                                        <TextError>{errors.postalCode}</TextError>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <Input type='text' name='shipTo' placeholder='Destinatario'
                                        value={values.shipTo}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                    />
                                    {errors.shipTo && touched.shipTo && (
                                        <TextError>{errors.shipTo}</TextError>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <Input type='text' name='associatedEmail' placeholder='Correo electrónico'
                                        value={values.associatedEmail}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                    />
                                    {errors.associatedEmail && touched.associatedEmail && (
                                        <TextError>{errors.associatedEmail}</TextError>
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
    );
}

export default Shipment;