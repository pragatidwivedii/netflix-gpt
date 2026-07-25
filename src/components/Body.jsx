import Browse from "./Browse";
import Login from "./Login";

import Home from "./Home";
import { createBrowserRouter , RouterProvider } from "react-router";


const Body = () => {

    const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/browse",
        element: <Browse />
    },
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}





export default Body;