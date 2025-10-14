import App from "@/App";
import Task from "@/Pages/Task/Task";
import UserList from "@/Pages/User/UserList";
import { createBrowserRouter } from "react-router";


const router= createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'task',
                element:<Task></Task>
            },
            {
                path:"users",
                element:<UserList></UserList>
            }
        ]
    }
])

export default router;