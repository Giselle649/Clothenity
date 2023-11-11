import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



const ChangeProductImageForm = () => {
    const [fileYangMauDikirim, setFileYangMauDikirim] = useState();
    const [nowFoto, setNowFoto] = useState({})
    let navigate = useNavigate()
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    





    const getData = async () => {
        try {
          const token = localStorage.getItem('access_token');
            setLoading(true)
            //clg dulu data, dan liat di console browser, bukan liat di postman
            const {data} = await axios.get(`http://localhost:3000/products/detail/${id}`, {headers: {
                Authorization: `Bearer ${token}`,
            }})
            setNowFoto(data)
            console.log(nowFoto, '24');
        } catch (error) {
          console.log(error);
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    
    
    useEffect(() => {
      getData()
    },[])

    const inputOnChangeHandler = (e) => {
      const inputan = e.target.files[0];
  
      console.log(inputan);
  
      setFileYangMauDikirim(inputan);
    };

    const formOnSubmitHandler = async (e) => {
        e.preventDefault();
    
        const token = localStorage.getItem("access_token");
    
        // Bikin form datanya terlebih dahulu
        const formData = new FormData();
    
        // set key yang dibutuhkan untuk ditambahkan valuenya
        formData.append("imgUrl", fileYangMauDikirim);
    
        try {
          const response = await axios.patch(`http://localhost:3000/products/img-url/${id}`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          console.log(response.data);
        } catch (err) {
          console.log(err);
        } finally {
            setLoading(false)
            navigate(`/products`)
          }
      };
    

      if(loading) return <p>Loading...</p>
      if(error) return <p>Error fetching, please try again</p>
    

    return (
        <> 
             {/* Halaman Upload Image Entitas Utama */}
      <section class="rounded-xl bg-gray-100 px-16 py-10 shadow-2xl  max-sm:px-8">
          <form onSubmit={formOnSubmitHandler}>
          {/* Judul Halaman Upload Image Entitas Utama */}
          <div class="bg-red-800 p-4 border-t-2  border-indigo-400 rounded-t">
              <div class="max-w-sm mx-auto md:w-full md:mx-0">
                <div class="inline-flex items-center space-x-4">
                  <h1 class="block text-3xl rounded text-white font-bold flex items-center justify-center">Update Product Image</h1>
                </div>
              </div>
          </div>
          {/* end of Judul Halaman Upload Image Entitas Utama */}
        

          {/* Current Image dari Halaman Upload Image Entitas Utama */}
          <img class="h-auto max-w-full" src={nowFoto.imgUrl} alt="image description" />
        {/* end of Image dari Halaman Upload Image Entitas Utama */}

          {/* Tempat Upload Image dari Halaman Upload Image Entitas Utama */}
          <div class="col-span-full">
              <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                  </svg>
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label htmlFor="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input type="file" onChange={inputOnChangeHandler} />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            {/* end of Tempat Upload Image dari Halaman Upload Image Entitas Utama */}

          {/* Change Button dari Halaman Upload Image Entitas Utama */}
          <button type="submit" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
          {/* end of Change Button dari Halaman Upload Image Entitas Utama */}
      
     </form>
      </section>
    {/* end of Halaman Upload Image Entitas Utama */}




        </>
    )


}

export default ChangeProductImageForm