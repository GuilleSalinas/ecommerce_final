import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const URI = "http://localhost:5001/blogs/";

const CompShowBlogs = () => {
  // Lo primero configurar los Hooks
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs();
  }, [blogs]);

  //  Aquie muestro todos los blogs (productos)
  const getBlogs = async () => {
    const res = await axios.get(URI);
    setBlogs(res.data);
  };

  // procedimiento para eliminar un blog (un producto)
  const deleteBlog = async (id) => {
    await axios.delete(`${URI}${id}`);
    setBlogs();
    Swal.fire("Producto", "El producto fue eliminado con éxito", "success");
  };

  return (
    <div>
      <Navbar />
      <h5 className="text-center text-black text-2xl font-bold mt-6">
        Esta página es para la edición de los productos
      </h5>
      <div className="my-8">
        <Link
          to="/create"
          className="bg-transparent hover:bg-[#147770] text-[#1c9d94] font-semibold
         hover:text-white py-3 px-4 border border-[#888889] hover:border-transparent rounded transition ease-in duration-500"
        >
          Agragar Producto
        </Link>
      </div>
      <table className="bg-[#e5e8f3] border-collapse border-2 border-gray-400">
        <thead className="bg-red-400 justify-center">
          <tr>
            <th className="px-4 py-2 border border-gray-400 text-gray-950">
              Nombre
            </th>
            <th className="px-4 py-2 border border-gray-400">Desc. Larga</th>
            <th className="px-4 py-2 border border-gray-400">Desc. Corta</th>
            <th className="px-4 py-2 border border-gray-400">Precio</th>
            <th className="px-4 py-2 border border-gray-400">Link</th>
            <th className="px-4 py-2 border border-gray-400">Categoria</th>
            <th className="px-4 py-2 border border-gray-400">Axiones</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((blog) => (
            <tr key={blog.id}>
              <td className="border border-gray-400">{blog.name}</td>
              <td className="border border-gray-400">{blog.descriptionLong}</td>
              <td className="border border-gray-400">
                {blog.descriptionShort}
              </td>
              <td className="border border-gray-400">{blog.price}</td>
              <td className="border border-gray-400">{blog.link}</td>
              <td className="border border-gray-400">{blog.category}</td>
              <td className="">
                <div className="inline-flex gap-2 mr-4">
                  <Link
                    to={`/edit/${blog.id}`}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteBlog(blog.id)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                  >
                    Borrar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mb-6"></div>
      <Footer />
    </div>
  );
};

export default CompShowBlogs;
