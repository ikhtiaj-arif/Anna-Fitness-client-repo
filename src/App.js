import "./App.css";
import router from "./Routes/Router";
import { RouterProvider } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider } from "react-photo-view";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <PhotoProvider>
      <Toaster />
        <RouterProvider router={router}></RouterProvider>
      </PhotoProvider>
    </div>
  );
}

export default App;
