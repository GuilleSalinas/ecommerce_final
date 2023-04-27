import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:5001/blogs/";

function EditBlog() {
  const [name, setName] = useState("");
  const [descriptionLong, setDescriptionLong] = useState("");
  const [descriptionShort, setDescriptionShort] = useState("");
  const [price, setPrice] = useState(0);
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // procedimiento para editar y guardar en la DB
  const update = async (e) => {
    e.preventDefault();
    await axios
      .put(URI + id, {
        name: name,
        descriptionLong: descriptionLong,
        descriptionShort: descriptionShort,
        price: price,
        link: link,
        category: category,
      })
      .then(function (resp) {
        console.log(resp);
        Swal.fire(
          "Producto",
          "El producto fue Modificado con éxito",
          "success"
        );
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate("/showblog");
  };

  useEffect(() => {
    getBlogById();
  }, []);

  const getBlogById = async () => {
    const res = await axios.get(URI + id);
    setName(res.data.name);
    setDescriptionLong(res.data.descriptionLong);
    setDescriptionShort(res.data.descriptionShort);
    setPrice(res.data.price);
    setLink(res.data.link);
    setCategory(res.data.category);
  };

  return (
    <>
      <Navbar />
      <h4 className="text-2xl my-4 font-bold text-center">
        Editar el Producto
      </h4>
      <form
        onSubmit={update}
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
            Guardar Producto
          </button>

          <Link
            to="/showblog"
            className="bg-transparent hover:bg-[#147770] text-[#ff5252] font-semibold
         hover:text-white py-3 px-4 border border-[#888889] hover:border-transparent rounded transition ease-in duration-500"
          >
            Salir sin Modificar
          </Link>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default EditBlog;
