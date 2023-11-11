import { useState, useEffect } from 'react';
// ? Import dan useNavigate dari react-router-dom
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios"
import ButtonLR from './ButtonLR';


const ProductForm = (props) => {

  const {theHeader, isItEdit} = props
    const {id} = useParams()
    const navigate = useNavigate()
    const [eachProduct, setEachProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    



  if (isItEdit) {
  const getData = async () => {
    try {
      const token = localStorage.getItem('access_token');
        setLoading(true)
        //clg dulu data, dan liat di console browser, bukan liat di postman
        const {data} = await axios.get(`http://localhost:3000/products/detail/${id}`, {headers: {
            Authorization: `Bearer ${token}`,
        }})
        setEachProduct(data)
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

}

  

  const formOnSubmitHandler = async (event) => {

    try {
      console.log('masuk');
      event.preventDefault()
      const token = localStorage.getItem('access_token');
      setLoading(true)
      const dataToSend = {
        ...eachProduct,
        authorId: eachProduct.authorId
      };
   
      if(isItEdit) {
        await axios.put(`http://localhost:3000/products/detail/${eachProduct.id}`, dataToSend, {headers: {
              Authorization: `Bearer ${token}`,
            }})
      } else {
        await axios.post(`http://localhost:3000/products`, dataToSend, {headers: {
              Authorization: `Bearer ${token}`,
            }})
      }

   

      
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
      navigate(`/products`)
    }
  };

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error fetching, please try again</p>



    return (
        <> 
   
   {/* Halaman Create Entitas Utama */}
     <section>
       <form className="rounded-xl bg-gray-100 px-16 py-16 shadow-2xl max-sm:px-8" onSubmit={(event) => formOnSubmitHandler(event)}> 

         {/* Judul Halaman Create Entitas Utama */}
         <div className="bg-red-800 p-4 border-t-2  border-indigo-400 rounded-t">
             <div className="max-w-sm mx-auto md:w-full md:mx-0">
               <div className="inline-flex items-center space-x-4">
                 <h1 className="block text-3xl rounded text-white font-bold flex items-center justify-center">{theHeader}</h1>
               </div>
             </div>
         </div>
         {/* end of Judul Halaman Create Entitas Utama */}
            
         <hr />
         <br />
         <br />

         {/* Product Name dari Halaman Create Entitas Utama */}
         <div className="sm:col-span-3">
             <label htmlFor="name" className="block text-lg font-bold leading-6 text-black">Product Name</label>
             <div className="mt-2">
                  <input type="text" name="name" id="name"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={isItEdit ? eachProduct.name : ""} onChange={(e) => {setEachProduct({...eachProduct, name: e.target.value})}}/>
             </div>
         </div>
         {/* end of Product Name dari Halaman Create Entitas Utama */}

         <br />
         <br />

         {/* Product Price dari Halaman Create Entitas Utama */}
         <div className="sm:col-span-4">
             <label htmlFor="price" className="block text-lg font-bold leading-6 text-black ">Price</label>
             <div className="mt-2">
                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                     <span className="flex select-none items-center pl-3 text-black font-semibold sm:text-sm">RP/</span>
                     <input type="text" name="price" id="price"  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-350 focus:ring-0 sm:text-sm sm:leading-6" placeholder="350.000" value={isItEdit ? eachProduct.price : ""}  onChange={(e) => {setEachProduct({...eachProduct, price: e.target.value})}}/>
                 </div>
             </div>
         </div>
         {/* end of Product Price dari Halaman Create Entitas Utama */}

         <br />
         <br />
                
         {/* Product Description dari Halaman Create Entitas Utama */}
         <div className="col-span-full">
             <label htmlFor="description" className="block text-lg font-bold leading-6 text-black ">Description</label>
             <div className="mt-2">
                 <textarea id="description" name="description" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={isItEdit ? eachProduct.description : ""}  onChange={(e) => {setEachProduct({...eachProduct, description: e.target.value})}}></textarea>
             </div>
         </div>
         {/* end of Product Description dari Halaman Create Entitas Utama */}
        
         <br />
         <br />
        
         {/* Product Image Url dari Halaman Create Entitas Utama */}
         <div className="col-span-full">
             <label htmlFor="imgUrl" className="block text-lg font-bold leading-6 text-black ">Image Url</label>
             <div className="mt-2">
                 <input type="text" id="imgUrl" name="imgUrl" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/4511b3e46afa2793c0975111f9c21f75507cc740_xxl-1.jpg" value={isItEdit ? eachProduct.imgUrl : ""}  onChange={(e) => {setEachProduct({...eachProduct, imgUrl: e.target.value})}}/>
             </div>
         </div>
         {/* end of Product Image Url dari Halaman Create Entitas Utama */}
            
         <br />
         <br />
        
         {/* Product Stock dari Halaman Create Entitas Utama */}
         <div className="sm:col-span-4">
             <label htmlFor="stock" className="block text-lg font-bold leading-6 text-black ">Stock</label>
             <div className="mt-2">
                 <input id="stock" name="stock" type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={isItEdit? eachProduct.stock: ""} onChange={(e) => {setEachProduct({...eachProduct, stock: e.target.value})}}/>
             </div>
         </div>
         {/* end of Product Stock dari Halaman Create Entitas Utama */}

         <br />
         <br />
        
         {/* Product Category Dropdown dari Halaman Create Entitas Utama */}
         <div className="sm:col-span-3">
             <label htmlFor="categoryId" className="block text-lg font-bold leading-6 text-black ">Category</label>
             <div className="mt-2">
                 <select id="categoryId" name="categoryId"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" value={isItEdit ? eachProduct?.Category?.name : ""} onChange={(e) => {setEachProduct({...eachProduct, category: e.target.value})}}>
                     <option value="1">Tops</option>
                     <option value="2">Bottoms</option>
                     <option value="3">Dress</option>
                     <option value="4">Outerwears</option>
                     <option value="5">Sportswears</option>
                 </select>
             </div>
         </div>
         {/* end of Product Category Dropdown dari Halaman Create Entitas Utama */}

         <br />
         <br />
         <hr />
         <br />
       </form>

       {/* Button dari Halaman Edit Entitas Utama */}
        <ButtonLR  buttonName={isItEdit ? "Update" : "Create" }/>
        {/* end of Button dari Halaman Edit Entitas Utama */}
     </section>
   {/* end of Halaman Create Entitas Utama */}
        </>
    )


}

export default ProductForm