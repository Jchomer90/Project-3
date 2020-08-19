import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Map from "./pages/Map";
import Login from "./pages/Login";
import Resources from "./pages/Resources";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./pages/LoginForm";
// import Cookie from "js-cookie";
// import Chart from "./pages/Chart";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";
import API from "./utils/API";

function App() {
  const [userId, setUserId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    API.getUsers().then((response) => {
      console.log(response);
      if (response.data.user) {
        setLoggedIn(true);
        setUserId(response.data.user._id);
        setRedirect("")
        console.log(response.data.user._id);
      } else {
        setLoggedIn(false);
      }
    });
  };

  // useEffect(() => {
  //     if (loggedIn == false){
  //         setRedirect(true)
  //     }
  // }, [])

  const renderRedirect= () => {
      if (redirect !== ""){
          return <Redirect to={redirect}/>
      }
  }

  const handleLogout = (event) => {
    axios.post("/api/user/logout").then((res) => {
      console.log(res);
      setLoggedIn(false)
      setRedirect("/");
    });
  };

  return (
    <>
      <Router>
      {/* {renderRedirect()} */}
      {console.log(loggedIn)}
      {console.log("Logged In")}
        <main className="container-fluid">
          <Route
            exact
            path="/"
            component={() => <LoginForm handleLogout={handleLogout} setLoggedIn={setLoggedIn} setRedirect={setRedirect} renderRedirect={renderRedirect}/>}
          />
          {/* <Route exact path="/signup" component={SignUp} /> */}
          <Route exact path="/login" component={() => <LoginForm handleLogout={handleLogout} setLoggedIn={setLoggedIn} setRedirect={setRedirect} renderRedirect={renderRedirect}/>}
          />
          <Route
            exact
            path="/home"
            component={() => <Home loggedIn={loggedIn} handleLogout={handleLogout} renderRedirect={renderRedirect} />}
          />
          {/* */}
          <Route
            exact
            path="/map"
            component={() => <Map userId={userId} loggedIn={loggedIn} handleLogout={handleLogout} setRedirect={setRedirect} renderRedirect={renderRedirect} />}
          />
          <Route
            exact
            path="/resources"
            component={() => <Resources loggedIn={loggedIn} handleLogout={handleLogout} renderRedirect={renderRedirect} />}
          />
          <Route
            exact
            path="/logout"
            component={() => <LoginForm loggedIn={loggedIn} handleLogout={handleLogout} renderRedirect={renderRedirect} setRedirect={setRedirect}/>}
          />
        </main>
      </Router>
    </>
  );
}

export default App;
