import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter,RouterProvider,} from "react-router";
import ScrollToTop from 'react-scroll-to-top';
import "@fontsource/cairo";

let router = createBrowserRouter([
  {
    path: "/",
    element : <App/>
  },
  {
    path: "about",
    element : <div>About</div>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
    <ScrollToTop smooth />
  </div>
);





