import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import BoosterRegis from "../../assets/svg/dl.beatsnoop register.svg";
import IconGoogle from "../../assets/svg/Icon-Google.svg";
import axios from "axios";

function SignUp() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    role: "customer",
    avatar: "https://i.imgur.com/5mPmJYO.jpeg",
  });

  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    // event.preventDefault()

    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/users/",
        user
      )
      console.log(response);
      navigate("/login")
    } catch (error) {}
  };

  return (
    <div className="reg-main">
      <div>
        <img className="image-product-reg" src={BoosterRegis} alt="" />
      </div>
      <div>
        <div className="register-con">
          <h2>Create a new account</h2>
          <h6>Enter your details below</h6>
          <input
            onChange={handleChange}
            value={user.name}
            name="name"
            className="inputs"
            type="text"
            placeholder="Name"
          />
          <input
            onChange={handleChange}
            value={user.email}
            name="email"
            className="inputs"
            type="email"
            placeholder="Email"
          />
          <input
            className="inputs"
            onChange={handleChange}
            value={user.password}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button onClick={() => handleSubmit()} className="btn-create-footer">
            Create Account
          </button>
          <div className="text-register google-text">
            <img className="img" src={IconGoogle} alt="icon google" />
            Sign up with Google
          </div>
          <div className="text-register">
            <span>
              Already have account?
              <Link to="/login" className="login-register">
                {" "}
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
