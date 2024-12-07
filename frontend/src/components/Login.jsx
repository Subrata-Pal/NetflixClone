import React from "react";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../utils/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading } from "../features/userSlice";

function Login() {
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);

  function loginHandler() {
    setLogin(!isLogin);
  }

  async function getData(e) {
    e.preventDefault();
    console.log("Inside get Data");
    console.log(email, " ", password, " ", username);

    if (!isLogin) {
      try {
        const res = await axios.post(
          `${API_ENDPOINT}/register`,
          {
            email,
            username,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(res);
        if (res.data.success) toast.success(res.data.message);
        else toast.error(res.data.message);
        setLogin(true);
        dispatch(setLoading(true));
      } catch (e) {
        console.log(e, " Something went wrong while registering");
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      try {
        const res = await axios.post(
          `${API_ENDPOINT}/login`,
          {
            email,
            username,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(res);
        toast.success(res.data.message);
        console.log(res.data.user);
        dispatch(setUser(res.data.user));
        navigate("/browse");
        dispatch(setLoading(true));
      } catch (e) {
        console.log(e, " Something went wrong while login");
      } finally {
        dispatch(setLoading(false));
      }
    }

    setEmail("");
    setUsername("");
    setPassword("");
  }

  return (
    <div className="">
      <Header />
      <div className="bg-cover w-[100vw] h-screen absolute top-0 left-0 bg-[url('https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-650-80.jpg.webp')]">
      </div>
      

      <div className=" w-screen h-screen bg-red-300 flex justify-center items-center">

      <div className="login-container login-container2 rounded-md w-[30vw] bg-black opacity-90 p-4 flex justify-center items-center">
        <div className="w-[95%] flex flex-col backdrop-blur-sm text-white p-2 pb-6">
          <h1 className="text-2xl mt-2">{!isLogin ? "Sign up" : "Sign in"}</h1>
          <form action="" className="" onSubmit={getData}>
            {!isLogin && (
              <input
                type="text"
                id="username"
                className="mt-6 bg-gray-800 border text-white border-gray-700  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            )}
            <input
              type="email"
              id="email"
              value={email}
              className={`${
                !isLogin ? "mt-4" : "mt-4"
              } mb-4 bg-gray-800 border text-white border-gray-700  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="password"
              name=""
              id=""
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-gray-800 border text-white border-gray-700  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="password"
            />
            <button
              className={`${
                isLogin ? "mt-12" : "mt-8"
              } mb-2 w-full block bg-red-600 p-2 border-red-500 rounded-md hover:bg-red-700  `}
            >
              {`${isLoading ? "Loading..." : !isLogin ? "Sign up" : "Sign in"}`}
            </button>
            <div className="w-full flex justify-between items-center gap-2 options">
              <label htmlFor="remember" className="flex justify-between items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className=""
                />
                Remember me
              </label>
              <a href="">Need help?</a>
            </div>
          </form>
          <div className="tracking-wide mt-6">
            {!isLogin ? (
              <p className="text-md flex gap-1 isLogin">
                <span>Already have an account?</span>
                <span
                  onClick={loginHandler}
                  className=" text-md text-blue-600 cursor-pointer"
                >
                  Login in now
                </span>
              </p>
            ) : (
              <p className="mt-16">
                New to Netflix?
                <span
                  onClick={loginHandler}
                  className="font-medium text-lg text-blue-600 cursor-pointer"
                >
                  Sign up now
                </span>
              </p>
            )}

            <p className="text-xs captcha">
              This page is protected by google reCAPTCHA to ensure you're not a
              bot{" "}
              <a href="" className="text-blue-500 text-[1em] ">
                Learn More.
              </a>
            </p>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Login;
