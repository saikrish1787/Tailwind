import React from "react";
import { loginActions } from "../Redux/loginSlice";
import { useDispatch } from "react-redux";

export default function Nav(props) {
  const dispatch = useDispatch();

  return (
    <nav className="bg-violet-600 py-3 flex justify-between align-middle text-pink-50 shadow-md shadow-violet-800/50">
      <div className="brand flex gap-1 pt-2 pl-4 hover:text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        <span>Repulse</span>
      </div>
      <div className="flex gap-6 pr-4">
        {props.isLoggedin && (
          <div className="flex gap-4 pt-1.5 ">
            <a href="home" className="hover:text-gray-300">
              Home
            </a>
            <a href="About" className="hover:text-gray-300">
              About us
            </a>
          </div>
        )}
        {!props.isLoggedin ? (
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(loginActions.login())}
              className="bg-indigo-400 px-4 py-2 rounded shadow hover:bg-indigo-500"
            >
              Login
            </button>
            <button
              onClick={() => dispatch(loginActions.signin())}
              className="bg-cyan-400 px-4 py-2 rounded shadow hover:bg-cyan-600"
            >
              Sign up
            </button>
          </div>
        ) : (
          <button
            onClick={props.logoutHandler}
            className=" bg-rose-600 px-6 py-2 rounded shadow-md hover:bg-rose-700"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
