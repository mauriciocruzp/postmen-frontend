import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import SecondaryButton from "../../components/Button/SecondaryButton";
import Header from "../../containers/Header/Header";
import Input from "../../components/Input/Input";
import TextError from "../../components/TextError/TextError";
import { Link } from "react-router-dom";
import routes from "../../consts/routes";

function Shipment() {
  const navigate = useNavigate();

  const initialValues = {
    address: "",
    city: "",
    state: "",
    postalCode: "",
    shipTo: "",
    associatedEmail: "",
  };

  const validationSchema = Yup.object({
    address: Yup.string().required("Campo vacío"),
    city: Yup.string().required("Campo vacío"),
    state: Yup.string().required("Campo vacío"),
    postalCode: Yup.string().required("Campo vacío"),
    shipTo: Yup.string().required("Campo vacío"),
    associatedEmail: Yup.string().required("Campo vacío"),
  });

  function handleSubmit(values) {
    const order = {
      address: values.address,
      city: values.city,
      state: values.state,
      postalCode: values.postalCode,
      shipTo: values.shipTo,
      associatedEmail: values.associatedEmail,
    };

    localStorage.setItem("order", JSON.stringify(order));
    
    navigate(routes.package);
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
              <div className="col-span-8 col-start-3">
                <h1 className="pb-2 text-4xl text-left w-full font-bold my-3">
                  Información de envío
                </h1>
                <h3 className="pb-2 text-left w-full font-light">
                  Rellene todos los campos para proceder con el envío
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="my-4">
                    <Input
                      type="text"
                      name="address"
                      placeholder="Dirección"
                      value={values.address}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                    {errors.address && touched.address && (
                      <TextError>{errors.address}</TextError>
                    )}
                  </div>
                  <div className="mb-3">
                    <Input
                      type="text"
                      name="city"
                      placeholder="Ciudad"
                      value={values.city}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                    {errors.city && touched.city && (
                      <TextError>{errors.city}</TextError>
                    )}
                  </div>
                  <div className="mb-3">
                    <Input
                      type="text"
                      name="state"
                      placeholder="Estado"
                      value={values.state}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                    {errors.state && touched.state && (
                      <TextError>{errors.state}</TextError>
                    )}
                  </div>
                  <div className="mb-3">
                    <Input
                      type="text"
                      name="postalCode"
                      placeholder="Código postal"
                      value={values.postalCode}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                    {errors.postalCode && touched.postalCode && (
                      <TextError>{errors.postalCode}</TextError>
                    )}
                  </div>
                  <div className="mb-3">
                    <Input
                      type="text"
                      name="shipTo"
                      placeholder="Destinatario"
                      value={values.shipTo}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                    {errors.shipTo && touched.shipTo && (
                      <TextError>{errors.shipTo}</TextError>
                    )}
                  </div>
                  <div className="mb-3">
                    <Input
                      type="text"
                      name="associatedEmail"
                      placeholder="Correo electrónico"
                      value={values.associatedEmail}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                    {errors.associatedEmail && touched.associatedEmail && (
                      <TextError>{errors.associatedEmail}</TextError>
                    )}
                  </div>
                  <div className="my-6 w-full flex flew-row space-x-1">
                      <Button type="submit" color="blue" width="w-1/2">
                        Siguiente
                      </Button>
                    <SecondaryButton type="submit" color="purple" width="w-1/2">
                      Cancelar
                    </SecondaryButton>
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
