import "./App.css";
// import Layout from "./components/Layout";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Contact from "./pages/contact/Contact";
// import About from "./pages/about/About";
// import SignUp from "./pages/signUp/SignUp";
// import Login from "./pages/login/Login";
// import WishList from "./pages/wishList/WishList";
// import Card from "./pages/card/Card";
// import Account from "./pages/account/Account";
import FormComponent from "./pages/FormComponent";


function App() {
  return (
    <div className="wrapper">
        {/* <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="wishList" element={<WishList />} />
            <Route path="card" element={<Card />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes> */}
        <FormComponent/>
    </div>
  );
}

export default App;
