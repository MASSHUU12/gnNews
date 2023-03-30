//
// Entry point for the application,
// render the main component and sets up the React Router.
//

import React from "react";
import i18next from "i18next";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root/Root";
import Error from "./routes/error/Error";
import Content from "./routes/root/content/Content";

import "./i18n";
import { store } from "./app/store";
import { detectUserLanguage } from "./helpers/lang";

import "./Global.scss";
import { getCookie } from "./helpers/getCookie";

// Create the React Router with a Root component and a Content component.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "country/:countryName",
        element: <Content />,
      },
    ],
  },
]);

// Change language to user preferred or saved language.
i18next.changeLanguage(getCookie("language") || detectUserLanguage());

// Render the main component with React Router and Redux store.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
