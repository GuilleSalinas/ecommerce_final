import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
import Footer from "../Footer";
import Navbar from "../Navbar";

// para las consultas a la DB del usuario instalo axios y MD5 para la clave
const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Formik
        initialValues={{
          correo: "",
          clave: "",
        }}
        // Aqui obtengo los valores de los campos para envialos a una API
        onSubmit={async (valores, { resetForm }) => {
          resetForm();
          const headers = new Headers({ "Content-Type": "application" });
          try {
            const response = await axios({
              method: "POST",
              url: "http://localhost:5001/users/login/",
              data: {
                mail: valores.correo,
                password: valores.clave,
              },
            });
            const isAdmin = response.data.isAdmin;

            // aquie van las cookies
            const cookies = new Cookies();
            cookies.set("nombre", response.data.name, { path: "/" });
            // -----------------------

            if (isAdmin) {
              Swal.fire(
                "Administrador",
                "Bienvenido, puedes modificar los productos",
                "success"
              );
              // window.location.href = "/showblog";
              navigate("/showblog");
            } else {
              Swal.fire("Bienvenido/a", "Deco Ideas", "success");
              navigate("/");
            }
          } catch (error) {
            console.log(error);
            Swal.fire(
              "Datos Invalidos",
              "Verifique Usuario o Password, vuelva a intntarlo",
              "warning"
            );
          }
        }}
        validate={(valores) => {
          let errores = {};
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
                <h6>LOGIN</h6>
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
                  <button type="submit">Login</button>
                </div>

                <div className="flex items-center justify-center mt-4 gap-8">
                  <div>
                    <h6>Si no tienes una cuenta ir a ...</h6>
                  </div>
                  <div>
                    <a href="/register" className="text-base">
                      Registro
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

export default Login;
