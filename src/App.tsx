import "./App.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Intro from "./screens/Intro/Intro";
import Dashboard from "./screens/Dashboard/Dashboard";
import Detail from "./screens/Detail/Detail";
import Form from "./screens/Form/Form";

const router = createBrowserRouter([
  {
    path: "/intro",
    element: <Intro onNext={() => {}} />,
  },
  {
    path: "/dashboard",
    element: <Dashboard poems={poems} onViewPoem={() => {}} />,
  },
  {
    path: "/detail",
    element: <Detail poem={examplePoem} onBack={() => {}} />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function App() {

}

export default App;