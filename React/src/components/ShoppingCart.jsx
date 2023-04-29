import { ShoppingOutlined } from "@ant-design/icons";
import { Badge, Drawer } from "antd";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ShoppingCart = () => {
  // Obtengo los valores de localstorage
  const obtenerLS = () => {
    // aqui calculo el total del carrito
    const [total, setTotal] = useState(0);
    console.log(total)
    // setTotal(producto.price)

    if (localStorage.getItem("carrito")) {
      // Hay valores en el localstorage
      let nombre = JSON.parse(localStorage.getItem("carrito"));
      
      return (
        <div>
          <ul className="italic font-bold flex text-sm items-center ml-4 gap-12 mb-4">
            <p>Producto</p>
            <p>descripción</p>
            <p className="ml-4">precio</p>
          </ul>
          {nombre.length === 0
            ? "carrito vacio"
            : nombre.map((producto) => (
              <div key={producto.id} className="">
                  <ul className="flex text-sm items-center">
                    <li className="">
                      <img
                        src={producto.link}
                        alt="imagen producto"
                        className=" mt-2 w-12 rounded-lg"
                      />
                    </li>
                    <li className="">
                      <h3>{producto.name}</h3>
                    </li>
                    <li>
                      <h3>{producto.descriptionShort}</h3>
                    </li>
                    <li>
                      <h3>${producto.price}</h3>
                    </li>
                  </ul>
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
        title="Shopping Cart"
        placement="right"
        onClose={onClose}
        open={open}
      >
        {obtenerLS()}
      </Drawer>
    </>
  );
};

export default ShoppingCart;
