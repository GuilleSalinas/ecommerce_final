import { ShoppingOutlined } from "@ant-design/icons";


const Navbar = () => {


  
  return (
    <>
      <header>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="/">
                <img src="/public/img/logo.png" className="w-40" />
              </a>
            </div>
            <nav>
              <ul id="menu" className="text-xl text-gray-600 text-current">
                <li>
                  <a
                    href="/"
                    className="block mt-4 lg:inline-block lg:mt-0 text-[#606063] hover:text-teal-700 mr-4 border-b-2 border-[#D9DFF7] hover:border-b-2 hover:border-teal-700"
                  >
                    Inicio
                  </a>
                </li>

                <li>
                  <a
                    href="/#product"
                    className="block mt-4 lg:inline-block lg:mt-0 text-[#606063] hover:text-teal-700 mr-4 border-b-2 border-[#D9DFF7] hover:border-b-2 hover:border-teal-700"
                  >
                    Productos
                  </a>
                </li>

                <li>
                  <a
                    href="/#ofertas"
                    className="block mt-4 lg:inline-block lg:mt-0 text-[#606063] hover:text-teal-700 mr-4 border-b-2 border-[#D9DFF7] hover:border-b-2 hover:border-teal-700"
                  >
                    Ofertas
                  </a>
                </li>

                <li>
                  <a
                    href="/login"
                    className="block mt-4 lg:inline-block lg:mt-0 text-[#606063] hover:text-teal-700 mr-4 border-b-2 border-[#D9DFF7] hover:border-b-2 hover:border-teal-700"
                  >
                    Login
                  </a>
                </li>

                {/* <li>
                  <a> Cerrar Sesión</a>
                </li> */}


              </ul>
            </nav>
            <a href="/cart" className="mb-3">
              <ShoppingOutlined
                style={{ fontSize: "30px", color: "#088178" }}
              />
            </a>
            {/* <img
              src="/public/img/menu.png"
              className="menu-icon"
              onClick="menutoggle()"
            /> */}
          </div>
        </div>
      </header>
    </>
  );
};


export default Navbar;
