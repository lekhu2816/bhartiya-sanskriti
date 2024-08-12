import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Blog from "./pages/blog/blog";
import Home from "./pages/home/home";
import AdminProducts from "./pages/adminProducts/adminProducts";
import AddProduct from "./pages/addProduct/addProduct";
import Navbar from "./component/navbar/navbar";
import AdminNavbar from "./component/adminNavbar/adminNavbar";
import UserLogin from "./pages/userLogin/userLogin";
import ChatButton from "./component/chatButton/chatButton";
import ChatBox from "./component/chatBox/chatBox";
import AdminLogin from "./pages/adminLogin/adminLogin"; 
import Cart from "./pages/cart/cart";
import Search from "./pages/search/search";
import Product from "./pages/product/product";
import UserProfile from "./component/userProfile/userProfile";
import Order from "./component/order/order";
import AdminProfile from "./component/adminProfile/adminProfile";
import Placeorder from "./component/placeOrder/placeOrder";
import Payment from "./pages/payment/payment";
import ConfirmOrder from "./pages/makeOrder/makeOrder";

function App() {
  const { pathname } = useLocation();
  const [nav, setNav] = useState(false);
  const [chatBox,setChatBox]=useState(false);
  useEffect(() => {
    setNav(pathname.includes("admin"));
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {!nav ? <Navbar /> : <AdminNavbar />}
       {chatBox? <div className="chatbox">
        <ChatBox></ChatBox>
      </div>:<></>}
      {!nav ? (
        <div className="chat-button">
          <ChatButton setChatBox={setChatBox}/>
        </div>
      ) : (
        <></>
      )}
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/placeorder" element={<Placeorder/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/confirm-order" element={<ConfirmOrder/>} />
        <Route path="/product/:id" element={<Product/>} />
        
        {/* Admin Routes */}

        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/addproduct" element={<AddProduct />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
      </Routes>
    </>
  );
}

export default App;
