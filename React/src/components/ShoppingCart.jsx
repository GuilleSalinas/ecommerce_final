import { ShoppingOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import React, { useState } from "react";

const ShoppingCart = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => showDrawer()}>
        <ShoppingOutlined style={{ fontSize: "30px", color: "#088178" }} />
        <span className="font-semibold text-sm text-orange-700">0</span>
      </button>

      <Drawer
        title="Shopping Cart"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <p>Producto 1...</p>
        <p>Producto 2...</p>
        <p>Producto 3...</p>
      </Drawer>
    </>
  );
};

export default ShoppingCart;
