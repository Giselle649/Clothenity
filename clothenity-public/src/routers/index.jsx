
import {
  createBrowserRouter,
} from "react-router-dom";
import AllProducts from "../views/AllProducts";
import ProductDetail from "../views/ProductDetail";
import Parent from "../views/Parent";



const router = createBrowserRouter([
    //Kalau user, ngasal tembak link
    //kalau user, click tombol Log In
    // {
    //     path: "/login",
    //     element: <Login />
    // },
    {
        element: <Parent />,
        children: [
            {
                path: "*",
                //mau ngarah ke mana
                element: <AllProducts />,
            },
            {
                path: "/",
                element: <AllProducts />,
            },
            {
                path: "/:id",
                element: <ProductDetail />,      
            }
        ]
    }
]);

export default router


