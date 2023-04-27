import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:5001/blogs/";

const CompCreateBlogs = () => {
  const [name, setName] = useState("");
  const [descriptionLong, setDescriptionLong] = useState("");
  const [descriptionShort, setDescriptionShort] = useState("");
  const [price, setPrice] = useState(0);
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  // procedimiento para guardar en la DB
  const store = async (e) => {
    e.preventDefault();
    await axios
      .post(URI, {
        name: name,
        descriptionLong: descriptionLong,
        descriptionShort: descriptionShort,
        price: price,
        link: link,
        category: category,
      })
      .then(function (resp) {
        console.log(resp);
      })
      .catch(function (error) {
        console.log(error);
      });
    Swal.fire("Agrego Producto", "El producto fue creado con éxito", "success");
    // form.current.reset();
    navigate("/showblog");
  };

  return (
    <>
      <h4 className="text-2xl my-4 font-bold text-center">Agregar Producto</h4>
      <form
        onSubmit={store}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre
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
            Desc. Larga
          </label>
          <textarea
            value={descriptionLong}
            onChange={(e) => setDescriptionLong(e.target.value)}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Desc. Corta
          </label>
          <input
            value={descriptionShort}
            onChange={(e) => setDescriptionShort(e.target.value)}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Precio
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Link imagen
          </label>
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Categoria
          </label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-start gap-6">
          <button
            type="submit"
            className="bg-transparent hover:bg-[#147770] text-[#1c9d94] font-semibold
         hover:text-white py-3 px-4 border border-[#888889] hover:border-transparent rounded transition ease-in duration-500"
          >
            Crear Producto
          </button>
          <Link
            to="/showblog"
            className="bg-transparent hover:bg-[#147770] text-[#ff5252] font-semibold
         hover:text-white py-3 px-4 border border-[#888889] hover:border-transparent rounded transition ease-in duration-500"
          >
            Salir sin Crear Producto
          </Link>
        </div>
      </form>
    </>
  );
};

export default CompCreateBlogs;
