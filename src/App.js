import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import NotFound from './screens/404NotFound'

function App() {
  //usamos use selector con el selecUser para pillar el state que tiene user desde useSlice
  const user = useSelector(selectUser);
  //dispatch para manejar el reducer
  const dispatch = useDispatch();

  useEffect(() => {
    //listen for any authentification changes
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        // console.log(userAuth);
        //dispatch del login, con su payload, un objeto
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged out
        //dispatch parra el logout, importarlo
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {/* Si no hay user, solo vemos LoginScreen */}
        {
        !user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
