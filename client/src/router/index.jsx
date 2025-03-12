
import { useRoutes } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage/index";
import AboutUs from "../pages/Account/index";
import TopLayout from "../layouts/TopMenu";
import Sign_Up from "../pages/SignUp/index";
import Sign_In from "../pages/SignIn/index";
import Product from "../pages/ProductPage/index";
import AddProduct from "../pages/AddProduct/index";
import ViewPage from "../pages/ViewPage/index";
import Account from "../pages/Account/index";

function Router() {
  const routes = [
    {
      path: "",
      element: (
        <TopLayout footer>
          <HomePage />
        </TopLayout>
      ),
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/sign-up",
      element: <Sign_Up />,
    },
    {
      path: "/sign-in",
      element: <Sign_In />,
    },
    {
      path: "/product",
      element: (
        <TopLayout footer>
          <Product />
        </TopLayout>
      ),
    },
    {
      path: "/add-product",
      element: (
        <TopLayout footer>
          <AddProduct />
        </TopLayout>
      ),
    },

    {
        path: "/view/:id",
        element: (
          <TopLayout footer>
            <ViewPage />
          </TopLayout>
        ),
      },
      {
        path: "/account",
        element: (
          <TopLayout footer>
            <Account />
          </TopLayout>
        ),
      },
  ];

  return useRoutes(routes);
}

export default Router;
