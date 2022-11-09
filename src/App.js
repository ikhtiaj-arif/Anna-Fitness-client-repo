import "./App.css";
import router from "./Routes/Router";
import { RouterProvider } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider } from "react-photo-view";

function App() {
  return (
    <div className="lg:w-3/4 mx-auto">
      <PhotoProvider>
        <RouterProvider router={router}></RouterProvider>
      </PhotoProvider>
    </div>
  );
}

export default App;
