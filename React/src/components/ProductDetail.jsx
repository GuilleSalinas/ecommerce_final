import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";

const ProductDetail = (data) => {

  // Aqui guardo los valores en localstorage
  const [guarda, setGuarda] = useState([]);
  const agregarDatos = (val) => {
    let setGuarda = guarda.push(val);
    localStorage.setItem("carrito", JSON.stringify(guarda));
  };
  // =========================================

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:5001/blogs/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Cargando Producto...</>;
  };

  const ShowProducts = () => {
    return (
      <>
        <main>
          {/* <!-- seccion detalle del producto --> */}
          <div className="small-container">
            <div className="t-det">
              <h2 className="title_det_prod">Detalle del producto</h2>
            </div>
          </div>
          <section className="small-container single-product">
            <div className="row car-perfil">
              <div className="col-2">
                <img src={product.link} width="320px" height="400px" />
              </div>
              <div className="col-2">
                <p className="font-bold mb-6">Para tu Casa</p>
                <h3 className="font-bold text-6xl mb-5 ">{product.name}</h3>
                <p className="text-xl font-semibold text-[#1c9d94]">
                  S {product.price}
                </p>
                <div className="flex gap-8 mb-4">
                  <input type="number" value="1" />
                  <button
                    onClick={() => agregarDatos(product)}
                    className="bg-transparent hover:bg-[#49807c] text-[#1c9d94] font-semibold hover:text-white 
                              px-6 border border-[#888889] hover:border-transparent rounded transition ease-in duration-500"
                  >
                    Carrito
                  </button>
                </div>

                <h3>Descripción producto</h3>
                <br />
                <p className="font-bold">{product.descriptionLong}</p>
              </div>
            </div>
          </section>

          <div className="small-container">
            <div className="row row-2 t-row"></div>
          </div>
        </main>
      </>
    );
  };

  return (
    <>
      <Navbar />
      {loading ? <Loading /> : <ShowProducts />}
      <Footer />
    </>
  );
};

export default ProductDetail;
