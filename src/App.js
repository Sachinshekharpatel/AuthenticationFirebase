import { Switch, Route } from "react-router-dom";
import React, { useContext,useEffect } from "react";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./components/store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  // useEffect(() => {
  //   if(localStorage.getItem('isLoggedIn')){
  //     authCtx.login(localStorage.getItem('isLoggedIn'));
  //   }
  // },[])
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        {isLoggedIn && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        {!isLoggedIn && (
          <Route path="/profile">
            <AuthPage />
          </Route>
        )}
      </Switch>
    </Layout>
  );
}

export default App;
