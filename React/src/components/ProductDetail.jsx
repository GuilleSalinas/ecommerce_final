import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";

const ProductDetail = (data) => {
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
                <p>Para tu Casa</p>
                <h1>{product.name}</h1>
                <p>{product.price?.toFixed(2)}</p>
                <input type="number" value="1" />
                <a href="" className="btn">
                  Agregar al carrito
                </a>

                <h3>Descripción producto</h3>
                <br />
                <p>{product.descriptionLong}</p>
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
