import App from "@/App";
import Task from "@/Pages/Task/Task";
import { createBrowserRouter } from "react-router";


const router= createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'task',
                element:<Task></Task>
            }
        ]
    }
])

export default router;