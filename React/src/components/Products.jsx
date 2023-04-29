import { ShoppingCartOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const Products = () => {
  // Aqui guardo los valores en localstorage
  const [guarda, setGuarda] = useState([]);

  const agregarDatos = (val)=>{
    let setGuarda = guarda.push(val)
    console.log('guarda2 = ', guarda);
    // coloco los productos en localstorage
    localStorage.setItem('carrito', JSON.stringify(guarda))
  }
// ==========================================================================

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // const response = await fetch("http://localhost:8000/products");
      const response = await fetch("http://localhost:5001/blogs/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.clone().json());
        setLoading(false);
        // console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Cargando = () => {
    return <>Cargando Productos...</>;
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="flex gap-4 justify-center mb-7">
          <button
            className="bg-transparent hover:bg-[#147770] text-[#1c9d94] font-semibold
                 hover:text-white py-2 px-4 border border-[#888889] hover:border-transparent rounded transition ease-in duration-500"
            onClick={() => setFilter(data)}
          >
            Todos
          </button>
          <button
            className="bg-transparent hover:bg-[#147770] text-[#1c9d94] font-semibold
                 hover:text-white py-2 px-4 border border-[#888889] hover:border-transparent rounded transition ease-in duration-500"
            onClick={() => filterProduct("canasta")}
          >
            Canastas
          </button>
          <button
            className="bg-transparent hover:bg-[#147770] text-[#1c9d94] font-semibold
                 hover:text-white py-2 px-4 border border-[#888889] hover:border-transparent rounded transition ease-in duration-500"
            onClick={() => filterProduct("delantal")}
          >
            Delantales
          </button>
          <button
            className="bg-transparent hover:bg-[#147770] text-[#1c9d94] font-semibold
                 hover:text-white py-2 px-4 border border-[#888889] hover:border-transparent rounded transition ease-in duration-500"
            onClick={() => filterProduct("mantel")}
          >
            Manteles
          </button>
          <button
            className="bg-transparent hover:bg-[#147770] text-[#1c9d94] font-semibold
                 hover:text-white py-2 px-4 border border-[#888889] hover:border-transparent rounded transition ease-in duration-500"
            onClick={() => filterProduct("piluso")}
          >
            Pilusos
          </button>
          <button
            className="bg-transparent hover:bg-[#147770] text-[#1c9d94] font-semibold
                 hover:text-white py-2 px-4 border border-[#888889] hover:border-transparent rounded transition ease-in duration-500"
            onClick={() => filterProduct("mate")}
          >
            Mate
          </button>
        </div>

        <div className="small-container container-products">
          {filter.map((product) => {
            return (
              <div key={product.id}>
                <ul className="grid">
                  <div>
                    {/* <a href={`/productdetail/${product.id}`}> */}
                    <li className="border-solid border-slate-300 border-2 rounded-xl">
                      <div className="col-4-col">
                        <div>
                          <a href={`/productdetail/${product.id}`}>
                            <img src={product.link} alt="imagen producto" />
                          </a>
                        </div>
                        <div className="mt-3 mx-3">
                          <span className="text-xl font-semibold mt-2">
                            {product.name}
                          </span>
                          <h4 className="text-base mt-2">
                            {product.descriptionShort}
                          </h4>

                          <div className="flex items-center justify-between mt-5">
                            <p className="text-xl font-semibold text-[#1c9d94]">
                              S {product.price}
                            </p>
                            <button
                              onClick={() => agregarDatos(product)}
                              className="flex items-center bg-transparent hover:bg-[#49807c] text-[#1c9d94] font-semibold hover:text-white 
                                                p-2 border border-[#888889] hover:border-transparent rounded transition ease-in duration-500"
                            >
                              <ShoppingCartOutlined
                                style={{
                                  fontSize: "22px",
                                  color: "#088178",
                                  padding: "0",
                                }}
                              />
                              <span>Carrito</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* </a> */}
                  </div>
                </ul>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <section id="product">
        <h2 className="title">Productos</h2>
        <hr />
        {loading ? <Cargando /> : <ShowProducts />}
      </section>
    </>
  );
};

export default Products;
