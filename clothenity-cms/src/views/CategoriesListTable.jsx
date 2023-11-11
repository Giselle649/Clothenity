import { useState, useEffect } from 'react';
// ? Import dan useNavigate dari react-router-dom
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import RowDataCategories from "../components/RowDataCategories"


const CategoriesListTable = () => {
    const navigate = useNavigate()
    const [allCategories, setAllCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

 
    
    const fetchData = async () => {
        try {
            setLoading(true)
            const token = localStorage.getItem('access_token');
            //clg dulu data, dan liat di console browser, bukan liat di postman
            const {data} = await axios.get('http://localhost:3000/categories', {headers: {
                Authorization: `Bearer ${token}`,
              }})
            setAllCategories(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    
    // return (
    //     <p>{JSON.stringify(allCategories)}</p>
    //     )

//   const addProductButtonOnClickHandler = async (event) => {
//     event.preventDefault();

//     navigate(`/addproduct`);
//   };



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
                              </tr>
                          </thead>
                          {/* end of Table Header */}

                          {/* Kumpulan Row Data */}
                          <tbody className="bg-white">
            
                              {/* 1st Row Data */}
                              {allCategories.map((eachCategories, index) => (
                                <RowDataCategories fetchData={fetchData} eachCategories={eachCategories} index={index}/>
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

export default CategoriesListTable






