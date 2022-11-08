
import './App.css';
import router from './Routes/Router';
import { RouterProvider }from 'react-router-dom';

function App() {
  return (
    <div  className="lg:w-3/4 mx-auto">

    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
