/** @format */

import React, { useEffect, useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(loginAction(username, password));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearError" });
      navigate("/");
    }

    if (error) {
      dispatch({ type: "clearMessage" });
      toast.error(error);
    }

    if(isAuthenticated) return navigate("/")
   
  }, [error, message]);

  return (
    <section>
      <div className="login">
        <p>Login</p>
        <form onSubmit={submitHandler}>
          <div className="inputBox">
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="inputBox">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password..."
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
