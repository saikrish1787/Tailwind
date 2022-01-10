import Nav from "./Components/Nav";
// import Footer from "./Components/Footer";
import Forms from "./Components/Forms";
// import { CardSummary } from "./Components/CardSummary";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/loginSlice";
import { Home } from "./Components/Pages/Home";
import Loader from "./Components/UI/Loader";

function App() {
  const [Loggedin, setLoggedin] = useState(false);
  // const [Loading, setLoading] = useState(false);
  // const loggedIn = (isLoggedin) => {
  //   setLoggedin(isLoggedin);
  // };

  // const loading = (isLoading) => {
  //   setLoading(isLoading);
  // };

  const logoutHandler = () => {
    setLoggedin(false);
  };

  return (
    <Provider store={store}>
      <Nav isLoggedin={Loggedin} logoutHandler={logoutHandler}></Nav>

      {!Loggedin && <Forms loggedIn={setLoggedin}></Forms>}
      {Loggedin && <Home></Home>}
      {/* {Loading && <Loader></Loader>} */}
    </Provider>
  );
}

export default App;
