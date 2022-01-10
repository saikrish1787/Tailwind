import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../Redux/loginSlice";

export default function Forms(props) {
  const [isLoggedin, setisLoggedin] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => props.loggedIn(isLoggedin), [isLoggedin]);
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.isLoggedin);

  console.log(isLoading);

  const toggleHandler = (e) => {
    e.preventDefault();
    dispatch(loginActions.toggle());
  };
  // props.loggedIn(isLoggedin);
  // props.loading(isLoading);

  const emailRef = useRef();
  const passwordRef = useRef();
  // const nameRef = useRef();
  const formHandler = (e) => {
    e.preventDefault();
    let emailValue = emailRef.current.value;
    let passwordValue = passwordRef.current.value;
    // let nameValue = nameRef.current.value;
    if (!isLogin) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFI097dX-SRwPNBlgXGMCvMGCvyF3LnNo",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
            returnSecureToken: true,
          }),
        }
      ).then((res) => {
        setisLoading(true);
        if (res.ok) {
          setisLoggedin(true);
          setisLoading(false);
          emailValue = "";
          passwordValue = "";
        }
      });
    } else {
      setisLoading(true);
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCFI097dX-SRwPNBlgXGMCvMGCvyF3LnNo",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
            returnSecureToken: true,
          }),
        }
      ).then((res) => {
        setisLoading(false);
        if (res.ok) {
          setisLoggedin(true);
        }
      });
    }
  };

  return (
    <div className="flex align-middle justify-center p-16">
      <form
        onSubmit={formHandler}
        className="bg-white text-indigo-400 rounded-lg shadow-2xl shadow-cyan-600/50 flex flex-col gap-4 p-16"
      >
        <h1 className="text-center text-4xl mb-5">
          {isLogin ? "LOGIN" : "Create an Account"}
        </h1>
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          placeholder="Enter Your Email"
          className="rounded w-72 h-12 focus:ring-2 shadow-xl focus:ring-cyan-500 outline-none text-base"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          placeholder="Enter Your Password"
          className="h-12 focus:ring-2 focus:ring-cyan-500 shadow-xl outline-none rounded"
        ></input>
        {!isLogin && <label htmlFor="name">Name</label>}
        {!isLogin && (
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="rounded h-12 focus:ring-2 focus:ring-cyan-500 shadow-xl outline-none"
          ></input>
        )}
        {!isLogin && <label htmlFor="number">Phone Number</label>}
        {!isLogin && (
          <input
            type="number"
            id="number"
            placeholder="Enter Your Phone Number"
            className="rounded h-12 focus:ring-2 focus:ring-cyan-500 shadow-xl outline-none"
          ></input>
        )}
        {!isLoading ? (
          <button className="bg-cyan-400 text-white py-4 rounded shadow-xl mt-4 shadow-cyan-500/40 hover:bg-cyan-500">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        ) : (
          <p>Loading.....</p>
        )}

        <button className="hover:text-cyan-700" onClick={toggleHandler}>
          {isLogin ? "Create an Account!? Sign up" : "Have a account!? Login"}
        </button>
      </form>
    </div>
  );
}
