import Browse from "./Browse";
import Login from "./Login";
// import Header from "./Header";
import Home from "./Home";
import { createBrowserRouter , RouterProvider } from "react-router";

// import GptResults from "./GptResults";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { auth } from "../utils/firebase";
// import {onAuthStateChanged} from "firebase/auth";
// import { addUser , removeUser } from "../utils/userSlice";

const Body = () => {

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             dispatch(addUser({uid: user.uid , displayName: user.displayName , email: user.email} ));
    //         } else {
    //             dispatch(removeUser());
    //         }
    //     });
    // } , [])
  

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
    // {
    //     path: "/GPTsearch",
    //     element: <GptResults />
    // }
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}





export default Body;