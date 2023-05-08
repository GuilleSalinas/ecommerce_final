import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const URI_USERS = "http://localhost:5001/users/register";

const CreateRegister = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // procedimiento para guardar en la DB
  const storeUsuario = async (e) => {
    e.preventDefault();
    await axios
      .post(URI_USERS, {
        name: name,
        mail: mail,
        password: password,
        isAdmin: isAdmin,
      })
      .then(function (resp) {
        console.log("respuesta = ", resp);
      })
      .catch(function (error) {
        console.log(error);
      });

    navigate("/");
  };

  return (
    <>
      <Navbar />

      <h4 className="text-2xl my-4 mb-8 font-bold text-center">
        Agregar Nuevo Usuario
      </h4>
      <form
        onSubmit={storeUsuario}
        className="mx-auto max-w-6xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10 flex flex-col"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre{" "}
            <span className="text-red-500 italic">
              (Debe de ser un nombre o iniciales del mismo)
            </span>
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Correo{" "}
            <span className="text-red-500 italic">
              (Debe de ser un correo válido)
            </span>
          </label>
          <input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          Password{" "}
            <span className="text-red-500 italic">
              (Debe de conter al menos 4 caracteres válidos)
            </span>
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
          />
        </div>

        <div className="flex items-center justify-start gap-6">
          <button
            type="submit"
            className="bg-transparent hover:bg-[#147770] text-[#1c9d94] font-semibold
         hover:text-white py-3 px-4 border border-[#888889] hover:border-transparent rounded transition ease-in duration-500"
          >
            Crear Usuario
          </button>
          <Link
            to="/"
            className="bg-transparent hover:bg-[#147770] text-[#ff5252] font-semibold
         hover:text-white py-3 px-4 border border-[#888889] hover:border-transparent rounded transition ease-in duration-500"
          >
            Salir sin Crear Usuario
          </Link>
        </div>
      </form>

      <Footer />
    </>
  );
};

export default CreateRegister;
