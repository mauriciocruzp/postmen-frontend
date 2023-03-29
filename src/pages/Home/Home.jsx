import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import Header from "../../containers/Header/Header";
import Input from "../../components/Input/Input";
import TextError from "../../components/TextError/TextError";
import Footer from "../../containers/Footer/Footer";
import { getOrder } from "../../api/services/order";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { endDelivery, startDelivery } from "../../api/services/event";

function Home() {
  const [data, setData] = useState(null);
  const { authState } = useAuth();

  const navigate = useNavigate();

  const initialValues = {
    trackingId: "",
  };

  const events = {
    CREATE_ORDER: "Orden recibida",
    START_DELIVERY: "El paquete ha iniciado su viaje",
    FINISH_DELIVERY: "El paquete ha sido entregado",
  };

  const months = {
    "01": "Enero",
    "02": "Febrero",
    "03": "Marzo",
    "04": "Abril",
    "05": "Mayo",
    "06": "Junio",
    "07": "Julio",
    "08": "Agosto",
    "09": "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre",
  };

  async function handleFinishDelivery() {
    const response = await endDelivery(data.trackingId);

    console.log(response);
  }

  async function handleStartDelivery() {
    const response = await startDelivery(data.trackingId);

    console.log(response);
  }

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    let bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach((b) => (binary += String.fromCharCode(b)));

    return window.btoa(binary);
  };

  const validationSchema = Yup.object({
    trackingId: Yup.string()
      .min(14, "El numero de rastreo debe contener 14 caracteres")
      .max(14, "El numero de rastreo debe contener 14 caracteres")
      .required("Se necesita un número de rastreo"),
  });

  async function handleSubmit(values) {
    const response = await getOrder(values.trackingId);

    if (response.status === 200) {
      console.log(response.data);
      setData(response.data);
    }
  }

  const transformDate = (date) => {
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    const year = date.slice(0, 4);
    return day + " de " + months[month] + " de " + year;
  };

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
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div className="flex flex-col">
                <form onSubmit={handleSubmit}>
                  <div className="w-full flex flex-col items-center space-x-1">
                    <Input
                      className="w-3/4"
                      type="text"
                      name="trackingId"
                      placeholder="Número de rastreo"
                      value={values.trackingId}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                    <div className="h-6">
                      {errors.trackingId && touched.trackingId && (
                        <TextError>{errors.trackingId}</TextError>
                      )}
                    </div>
                    <Button type="submit" width="w-1/4">
                      Buscar
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </Formik>
        </div>

        <div className="container bg-gray-300 my-3 col-span-10 col-start-2 border-3 rounded-2xl">
          {data && (
            <div className="w-full p-2">
              <h1 className="pb-2 text-4xl text-left w-full font-bold mx-12 mt-2 mb-8">
                Orden No. {data.trackingId}
              </h1>
              <h2 className="pb-2 text-4xl text-left w-full font-bold mx-12 my-2">
                Actualizaciones
              </h2>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  {data.events.map((event) => (
                    <>
                      {/* use substring for event date */}
                      <h2 className="text-left w-full font-semibold mx-12 my-2">
                        {transformDate(event.date.substring(0, 10))}
                      </h2>
                      <div className="flex flex-row mx-12 mb-24">
                        <p className="text-left mr-28">
                          {event.date.substring(11, 16)}
                        </p>
                        <div className="flex flex-col my-1">
                          <p>{events[event.type]}</p>
                        </div>
                      </div>
                    </>
                  ))}
                </div>

                <div className="bg-gray-400 col-span-3 col-start-8 h-52 w-72 mr-36">
                  <h2 className="text-left font-semibold mx-3 my-2">
                    Dirección de envío
                  </h2>
                  <p className="mx-3 my-2">{data.shipTo}</p>
                  <p className="mx-3 my-2">{data.address}</p>
                  <p className="mx-3 my-2">
                    {data.city}, {data.state}
                    <br />
                    {data.postalCode}
                  </p>
                  {/* download file from data.orderGuideUrl */}
                  <a
                    href={data.orderGuideUrl}
                    download="orderGuide.pdf"
                    className="mx-3 my-2"
                  >
                    Descargar guía de orden
                  </a>

                </div>
              </div>
              {authState.user.roles.includes("ADMIN") && (
                <div className="flex flex-row justify-around">
                  <Button
                    type="submit"
                    width="w-1/4"
                    isDisabled={
                      data.status.name === "IN_PROGRESS" ||
                      data.status.name === "DELIVERED"
                    }
                    onClick={handleStartDelivery}
                  >
                    Empezar envío
                  </Button>
                  <Button
                    type="submit"
                    width="w-1/4"
                    isDisabled={
                      data.status.name === "RECEIVED" ||
                      data.status.name === "DELIVERED"
                    }
                    onClick={handleFinishDelivery}
                  >
                    Marcar como entregado
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
