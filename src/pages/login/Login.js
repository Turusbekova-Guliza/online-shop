import React, { useState } from "react";
import "../signUp/SignUp.css";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import phone from "../../assets/svg/dl.beatsnoop register.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../redux/user/userSlice";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        userData
      );

      dispatch(setToken(data.access_token));
      navigate("/account")

      // console.log(data);

      const userInfo = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setUser(userInfo.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="reg-main">
      <img src={phone} alt="" />
      <div className="register-con">
        <div className="register-header">
          <h2>Log in to Exclusive</h2>
          <h6>Enter your details below</h6>
        </div>
        <div className="register-form">
          <input
            name="email"
            value={userData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            required
          />
          <br />
          <input
            name="password"
            value={userData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
          <br />
          <div className="login-btn">
            <button onClick={handleLogin} className="login">
              Login
            </button>
            <Link to="/">Forget Password ?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
