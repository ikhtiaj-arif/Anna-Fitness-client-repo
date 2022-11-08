import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import ReviewUpAdd from '../Pages/Private/ReviewUpAdd';
import Home from '../Pages/Public/Home';
import ProgramDetails from '../Pages/Public/HomeComponents/Details/ProgramDetails';
import Programs from '../Pages/Public/HomeComponents/Programs';
import Login from '../Pages/Shared/Login';
import Register from '../Pages/Shared/Register';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/program/:id',
                element: <ProgramDetails></ProgramDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/program/${params.id}`)
            },
            {
                path: '/reviews/:id',
                element: <ReviewUpAdd></ReviewUpAdd>,
                loader: ({params}) => fetch(`http://localhost:5000/program/${params.id}`)
            },
        ]
    }
])



export default router;