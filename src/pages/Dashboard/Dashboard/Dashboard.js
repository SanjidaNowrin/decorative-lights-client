import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./Dashboard.css";

import useAuth from "./../../../hooks/useAuth";
import MakeAdmin from "./MakeAdmin";
import AddProduct from "./Admin/AddProduct";
import ManageProducts from "./Admin/ManageProducts";
import Cart from "./Cart/Cart";
import ManageAllOrders from "./Admin/ManageAllOrders";
import AdminRoute from "./Admin/AdminRoute";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { allContext } = useAuth();
  const { user, isAdmi } = allContext;
  //const { email } = user;

  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>Dashboard</h5>
              {!isAdmi && (
                <Link to={`${url}/book`}>
                  <li className="mt-5 dashboard-menu"> Orders</li>
                </Link>
              )}
              {!isAdmi && (
                <Link to={`${url}/cart`}>
                  <li className="mt-5 dashboard-menu">My Orders</li>
                </Link>
              )}

              {!isAdmi && (
                <Link to={`${url}/review`}>
                  <li className="mt-5 dashboard-menu">Review</li>
                </Link>
              )}
              <div className="admin-dashboard">
                {isAdmi && (
                  <Link to={`${url}/makeAdmin`}>
                    <li className="dashboard-menu">Make Admin</li>
                  </Link>
                )}
                {isAdmi && (
                  <Link to={`${url}/addproduct`}>
                    <li className="dashboard-menu">Add Product</li>
                  </Link>
                )}
                {isAdmi && (
                  <Link to={`${url}/manageproducts`}>
                    <li className="dashboard-menu">Manage Products</li>
                  </Link>
                )}
                {isAdmi && (
                  <Link to={`${url}/manageorders`}>
                    <li className="dashboard-menu">Manage All Orders</li>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={`${path}/cart`}>
                <Cart></Cart>
              </Route>
              <AdminRoute exact path={`${path}/manageorders`}>
                <ManageAllOrders></ManageAllOrders>
              </AdminRoute>

              <AdminRoute exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute exact path={`${path}/addproduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute exact path={`${path}/manageproducts`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
