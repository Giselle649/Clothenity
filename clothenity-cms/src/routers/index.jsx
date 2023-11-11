import {
    createBrowserRouter,
  } from "react-router-dom";
  //import Parent from "../views/Parent"
  import LogIn from "../views/LogIn";
import ProductsListTable from "../views/ProductsListTable";
import Parent from "../views/Parent";
import AddProductForm from "../views/AddProductForm";
import EditProductForm from "../views/EditProductForm";

  
  const router = createBrowserRouter([
      {
          path: "/login",
          element: <LogIn />
      },
        {
            path: "*",
            element: <LogIn />
        },
      {
          element: <Parent />,
          loader: () => {
            //Cek apakah ada token di localStorage
            const token = localStorage.getItem('access_token');
      
            //Jika tidak ada, maka redirect ke halaman login
            if (!token) {
              return redirect('/login');
            }
      
            //Harus ada sesuatu yang direturn pada loader
            //sehingga kita return null saja cukup
            return null;
          },
          children: [
              {
                  path: "/products",
                  element: <ProductsListTable />,
              },
              {
                  path: "/addproduct",
                  element: <AddProductForm />,
              },
              {
                path: "/editproduct/:id",
                element: <EditProductForm />,
            },
              {
                  path: "/changeproductimage/:id",
                  element: <ChangeProductImageForm />,      
              },
          //     {
          //       path: "/categories",
          //       element: <CategoriesListTable />,      
          //   },
          //   {
          //       path: "/registerstaff",
          //       element: <RegisterStaffForm />,      
          //  },
          ]
      }
  ]);
  
  export default router


  
  
  
  