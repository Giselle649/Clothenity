import { useState, useEffect } from 'react';
// ? Import dan useNavigate dari react-router-dom
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import RowData from "../components/RowData"


const ProductsListTable = () => {
    const navigate = useNavigate()
    const [allProducts, setAllProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

 
    
    const fetchData = async () => {
        try {
            setLoading(true)
            const token = localStorage.getItem('access_token');
            //clg dulu data, dan liat di console browser, bukan liat di postman
            const {data} = await axios.get('http://localhost:3000/products', {headers: {
                Authorization: `Bearer ${token}`,
              }})
            setAllProducts(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    
    // return (
    //     <p>{JSON.stringify(allProducts)}</p>
    //     )

  const addProductButtonOnClickHandler = async (event) => {
    event.preventDefault();

    navigate(`/addproduct`);
  };



  useEffect(() => {
    fetchData();
  },[]);


  if(loading) return <p>Loading...</p>
if(error) return <p>Error fetching, please try again</p>

  return (
    
<>
    {/* Halaman List Entitas Utama */}
      <section className="container px-4 mx-auto bg-gray-100">

      {/* Judul Halaman List Entitas Utama */}
      <div className="bg-red-800 p-4 border-t-2  border-indigo-400 rounded-t">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="block text-3xl rounded text-white font-bold flex items-center justify-center">Product List</h1>
            </div>
          </div>
      </div>
      {/* end of Judul Halaman List Entitas Utama */}

      {/* Add Product Button */}
      <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mt-4 gap-x-3">
              <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto gap-x-2 bg-red-800"
              onClick={addProductButtonOnClickHandler}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  <span> Add Product</span>
              </button>
          </div>
      </div>
      {/* end of Add Product Button */}

      {/* All About Table */}
      <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                      {/* Table */}
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">

                          {/* Table Header */}
                          <thead className="bg-red-800">
                              <tr>
                                  <th scope="col" className="py-3.5 px-4 text-sm text-left rtl:text-right text-white font-bold">
                                      <button className="flex items-center gap-x-3 focus:outline-none">
                                          <span>Id</span>
                                      </button>
                                  </th>

                                  <th scope="col" className="px-12 py-3.5 text-sm text-left rtl:text-right text-white font-bold">
                                      Name
                                  </th>

                                  <th scope="col" className="px-4 py-3.5 text-sm text-left rtl:text-right text-white font-bold">
                                      Description
                                  </th>

                                  <th scope="col" className="px-4 py-3.5 text-sm text-left rtl:text-right text-white font-bold">Price</th>

                                  <th scope="col" className="px-4 py-3.5 text-sm text-left rtl:text-right text-white font-bold">Stock</th>

                                  <th scope="col" className="px-4 py-3.5 text-sm text-left rtl:text-right text-white font-bold">Image url</th>

                                  <th scope="col" className="px-4 py-3.5 text-sm text-left rtl:text-right text-white font-bold">Category</th>

                                  <th scope="col" className="px-4 py-3.5 text-sm text-left rtl:text-right text-white font-bold">Author</th>

                                  <th scope="col" className="px-4 py-3.5 text-sm text-left rtl:text-right text-white font-bold">Action</th>
                              </tr>
                          </thead>
                          {/* end of Table Header */}

                          {/* Kumpulan Row Data */}
                          <tbody className="bg-white">
            
                              {/* 1st Row Data */}
                              {allProducts.map((eachProduct, index) => (
                                <RowData fetchData={fetchData} eachProduct={eachProduct} index={index}/>
                                ))}
                                {/* end of 1st Row Data */}
                                
                          </tbody>
                          {/* end of Kumpulan Row Data */}
                      </table>
                      {/* end of Table */}
                  </div>
              </div>
          </div>
      </div>
      {/* end of All About Table */}
      </section>
    {/* end of Halaman List Entitas Utama */}

</>
  );
};

export default ProductsListTable;






