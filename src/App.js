  // src/App.js
  import React from "react";
  import { Route, Switch } from "react-router-dom";
  import Category from "./components/Category";
  import Products from "./components/Products";
  import PrivateRoute from "./services/PrivateRoute";
  import Navbar from "./components/Navbar/Navbar";
  import Home from "./pages/Home";
  import 'antd/dist/antd.css';
  import './App.css'

  

  const Admin = () => (
    <div>
    <h2>Welcome admin!</h2>
    </div>
  );

  
  export default function App() {
    return (
      <div className='App'>
        <section className='App-content'>
        <Navbar></Navbar>
        <Switch className='container'>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/reservas">
            <Category />
          </Route>
          <Route path="/habitaciones">
            <Products />
          </Route>
          <PrivateRoute path="/admin" component={Admin} />
        </Switch>
        </section>
      </div>
    );
  }
