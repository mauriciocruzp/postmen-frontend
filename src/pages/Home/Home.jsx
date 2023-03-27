import {Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import Header from "../../containers/Header/Header";
import Input from "../../components/Input/Input";
import TextError from "../../components/TextError/TextError";

function Home() {

    const navigate = useNavigate();

    const initialValues = {
        trackingId: '',
    }

    const validationSchema = Yup.object({
        trackingId: Yup.string()
            .min('El número de rastreo debe contener 14 caracteres')
            .max('El número de rastreo debe tener 14 caracteres')
            .required('Se necesita un número de rastreo'),
    });

    async function handleSubmit(values){
        /*
        const response = await (values.trackingId);

        if (response.status === 200) {
            navigate('/');
            return;
        }

        alert('')
        */
    }

    return (
        <>
            <Header />
            <div className="container mx-auto mt-5 grid grid-cols-12 gap-x-4">
                <div className="flex flex-col col-span-4 col-start-5">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        { ({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <div className="flex flex-col">
                                <form onSubmit={handleSubmit}>
                                    <div className="w-full flex flex-row space-x-1">
                                        <Input className='w-3/4' type='text' name='trackingId' placeholder='Número de rastreo'
                                            value={values.trackingId}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                        />
                                        {errors.trackingId && touched.trackingId && (
                                            <TextError>{errors.trackingId}</TextError>
                                        )}
                                        <Button type='submit' width='w-1/4' >Buscar</Button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </Formik>
                </div>
                <div className="container bg-gray-300 my-3 col-span-10 col-start-2 border-3">
                    <div className="w-full p-2">
                        <h1 className="pb-2 text-4xl text-left w-full font-bold mx-12 mt-2 mb-8">Orden No. ##############</h1>
                        <h2 className="pb-2 text-4xl text-left w-full font-bold mx-12 my-2">Actualizaciones</h2>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <h2 className="text-left w-full font-semibold mx-12 my-2">Martes 28 de marzo</h2>
                                <div className="flex flex-row mx-12 mb-24">
                                    <p className="text-left mr-28">3:46 pm</p>
                                    <div className="flex flex-col my-1">
                                        <p>Paquete recibido en instalación</p>
                                        <p className="italic">Laredo, Texas US</p>
                                    </div>
                                </div>
                                <h2 className="text-left w-full font-semibold mx-12 my-2">Miércoles 29 de marzo</h2>
                                <div className="flex flex-row mx-12 mb-24">
                                    <p className="text-left mr-28">5:19 am</p>
                                    <div className="flex flex-col my-1">
                                        <p>Paquete recibido en aduana</p>
                                        <p className="italic">Apodaca, Nuevo León MX</p>
                                    </div>
                                </div>
                                <h2 className="text-left w-full font-semibold mx-12 my-2">Jueves 30 de marzo</h2>
                                <div className="flex flex-row mx-12 mb-24">
                                    <p className="text-left mr-28">2:20 pm</p>
                                    <div className="flex flex-col my-1">
                                        <p>Paquete recibido en almacén</p>
                                        <p className="italic">Tuxtla Gtz, Chiapas MX</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gray-400 col-span-3 col-start-8 h-52 w-72 mr-36">
                                <h2 className="text-left font-semibold mx-3 my-2">Dirección de envío</h2>
                                <p className="mx-3 my-2">Eduardo Sebastián Hernández</p>
                                <p className="mx-3 my-2">Privada Oaxaca Manzana 23 <br/>Lote 17 Col. Las Granjas</p>
                                <p className="mx-3 my-2">Tuxtla Gutiérrez, Chiapas <br/>29019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Home;