import "./App.css";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { router } from './Routes/Router';

function App({ children }) {
  return (
    <div className="App">
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "black",
            background: "gray",
          },
        }}
      ></Toaster>
          <RouterProvider router={router}>{children}</RouterProvider>
    </div>
  );
}

export default App;
