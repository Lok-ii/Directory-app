import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Layout from "./Components/Layout";
import AddNewPerson from "./Components/AddNewPerson/AddNewPerson";
import Retrieve from "./Components/Retrieve/Retrieve";

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
          {
              path: "/",
              element: <AddNewPerson />
          }, 
          {
              path: "retrieve",
              element: <Retrieve />
          }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
