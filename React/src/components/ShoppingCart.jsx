import { DeleteOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Badge, Drawer } from "antd";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const BorrarCarroAll = () => {
  // Borra todos los productos del carrito, solo falta recargar la pagina....
  localStorage.removeItem("carrito");
};



const DeleteProductCar = (e) => {
  console.log(e);
  const isDelete = window.confirm("Deseas eliminar el producto del carrito?");
  if (isDelete) {
    // almaceno en myArrayLocalStorage el array del local storage transformado en un objeto JSON
    let myArrayLocalStorage = JSON.parse(localStorage.getItem("carrito"));
    console.log(myArrayLocalStorage);

    // Borro el elemento del indice
     const prodEliminar = myArrayLocalStorage.filter(prod => prod.id !== e)
     console.log(prodEliminar)

    // Guardo el nuevo array en formato JSON en el localStorage
    localStorage.setItem('carrito', JSON.stringify(prodEliminar))
    ShoppingCart()
  }
};

const ShoppingCart = () => {
  // Obtengo los valores de localstorage
  const obtenerLS = () => {
    if (localStorage.getItem("carrito")) {
      // Hay valores en el localstorage
      let ProdCard = JSON.parse(localStorage.getItem("carrito"));
      // console.log('CarritoLenght=',ProdCard.length)
      return (
        <div>
          <ul className="italic font-bold flex text-sm items-center ml-4 gap-14 mb-4">
            <p>Producto</p>
            <p>descripción</p>
            <p className="ml-4">precio</p>
          </ul>
          {ProdCard.length === 0
            ? <h3>"No hay productos en el Carrito"</h3>
            : ProdCard.map((producto) => (
                <div key={producto.id} className="">
                  <tbody>
                    <ul className="flex items-center justify-between gap-2">
                      <li className="">
                        <img
                          src={producto.link}
                          alt="imagen producto"
                          className="w-14 h-14 object-cover rounded-lg"
                        />
                      </li>
                      <li className="">
                        <h3 className="text-sm">{producto.name}</h3>
                      </li>
                      <li>
                        <h3 className="text-sm">{producto.descriptionShort}</h3>
                      </li>
                      <li>
                        <h3 className="text-sm">${producto.price}</h3>
                      </li>
                      <li>
                        <button onClick={() => DeleteProductCar(producto.id)}>
                          <DeleteOutlined className="text-xl mb-2 text-rose-600" />
                        </button>
                      </li>
                    </ul>
                  </tbody>
                </div>
              ))}
          <div>
            {/* {total > 0 ? (
              <>
                <h3>Resumen del pedido</h3>
                <p>Total a pagar:{total}</p>
              </>
            ) : (
              <p>No hay productos en el carrito</p>
            )} */}
          </div>
        </div>
      );
    } else {
      console.log("No hay productos en el carrito");
    }
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <span style={{ marginRight: 0 }}>
          <Badge count={1}>
            <button onClick={() => showDrawer()}>
              <ShoppingOutlined
                style={{ fontSize: "30px", color: "#088178" }}
              />
            </button>
          </Badge>
        </span>
      </div>
      <Drawer
        title="Carro de Compras"
        placement="right"
        onClose={onClose}
        open={open}
      >
        {obtenerLS()}
        <button
          onClick={() => BorrarCarroAll()}
          className="bg-[#088178] py-2 px-4 rounded-xl mt-8 text-white hover:bg-[#26c1b6]"
        >
          Borrar carrito
        </button>
      </Drawer>
    </>
  );
};

export default ShoppingCart;
