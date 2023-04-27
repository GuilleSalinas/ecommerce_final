import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Register = () => {
  const [formularioenviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Navbar />
      
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          clave: "",
        }}
        // Aqui obtengo los valores de los campos para envialos a una API
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 4000);
          console.log(valores.nombre);
          console.log(valores.correo);
          console.log(valores.clave);
       }}

       
       validate={(valores) => {
          let errores = {};

          // Aqui valido los datos para el nombre con exp regular.
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresar un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          // Aqui valido los datos para el correo con exp regular.
          if (!valores.correo) {
            errores.correo = "Por favor ingresar un correo electrónico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "El correo solo puede contener letras, números, puntos, guiones y guin bajo.";
          }

          // Aqui valido la clave con exp regular.
          if (!valores.clave) {
            errores.clave = "Por favor ingresar la possword";
          } else if (!/^.{4,12}$/.test(valores.clave)) {
            errores.clave = "La contraseña tiene que ser de 4 a 12 dígitos.";
          }
          return errores;
        }}
      >
        {({ errors }) => (
          <div className="login-box">
            <img
              src="../../../public/img/Avatar.png"
              alt="avatar"
              className="avatar"
            />
            <Form className="formulario">
              <div className="flex items-center justify-center uppercase font-bold tracking-[4px]">
                <h6>registro</h6>
              </div>
              <div>
                <label htmlFor="correo">Nombre</label>
                <Field
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="John Doe"
                />
                <ErrorMessage
                  name="nombre"
                  component={() => <div className="error">{errors.nombre}</div>}
                />
              </div>
              <div>
                <label htmlFor="correo">Correo</label>
                <Field
                  type="amail"
                  id="correo"
                  name="correo"
                  placeholder="correo@correo.com"
                />
                <ErrorMessage
                  name="correo"
                  component={() => <div className="error">{errors.correo}</div>}
                />
              </div>
              <div>
                <label htmlFor="clave">Password</label>
                <Field type="password" id="clae" name="clave" placeholder="" />
                <ErrorMessage
                  name="clave"
                  component={() => <div className="error">{errors.clave}</div>}
                />
              </div>

              {/* boton de login y Registro */}
              <div>
                <div>
                  <button type="submit">Registro</button>
                  {formularioenviado && (
                    <p className="exito">Registro realizado con éxito</p>
                  )}
                </div>

                <div className="flex items-center justify-center mt-4 gap-8">
                  <div>
                    <h6>No tienes regostro, ir al...</h6>
                  </div>
                  <div>
                  <a
                    href="/login"
                    className="text-base"
                  >
                    LOGIN
                  </a>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>

      <Footer />
    </>
  );
};

export default Register;
