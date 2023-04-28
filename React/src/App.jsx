import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompCreateBlogs from "./blog/CreateBlog";
import EditBlog from "./blog/EditBlog";
import CompShowBlogs from "./blog/ShowBlog";
import FullPage from "./components/FullPage";
import Login from "./components/Login/Login";
import ProductDetail from "./components/ProductDetail";
import Register from "./components/Register/Register";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="mx-24">
      <BrowserRouter>
        <Routes>
          <Route path="/showblog" element={<CompShowBlogs />}></Route>
          <Route path="/create" element={<CompCreateBlogs />}></Route>
          <Route path="/edit/:id" element={<EditBlog />}></Route>

          <Route path="/" element={<FullPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
          <Route path="/productdetail/:id" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
