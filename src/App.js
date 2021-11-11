import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import AuthProvider from "./contexts/AuthProvider";

import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import MoreProducts from "./pages/MoreProducts/MoreProducts";
import Details from "./pages/Details";
import Dashbaord from "./pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./pages/route/PrivateRoute";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/moreproducts">
              <MoreProducts></MoreProducts>
            </Route>
            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/Dashboard">
              <Dashbaord></Dashbaord>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
