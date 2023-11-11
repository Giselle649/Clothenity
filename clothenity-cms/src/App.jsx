// ? import RouterProvider dari react-router-dom
import { RouterProvider } from 'react-router-dom';
import router from './routers';
 

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
















//     <br />
//     <br />
//     <hr />
//     <br />
//     <br />



//     {/* Halaman Edit Entitas Utama */}
//       <section>
//           <form class="rounded-xl bg-gray-100 px-16 py-10 shadow-2xl  max-sm:px-8">
//               {/* Judul Halaman Edit Entitas Utama */}
//               <div class="bg-red-800 p-4 border-t-2  border-indigo-400 rounded-t">
//                   <div class="max-w-sm mx-auto md:w-full md:mx-0">
//                     <div class="inline-flex items-center space-x-4">
//                       <h1 class="block text-3xl rounded text-white font-bold flex items-center justify-center">Update a Product</h1>
//                     </div>
//                   </div>
//               </div>
//               {/* end of Judul Halaman Edit Entitas Utama */}
                
//               <hr />
//               <br />
//               <br />
          
//               {/* Product Name dari Halaman Edit Entitas Utama */}
//               <div class="sm:col-span-3">
//                   <label htmlFor="first-name" class="block text-lg font-bold leading-6 text-black ">Product Name</label>
//                   <div class="mt-2">
//                       <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                   </div>
//               </div>
//               {/* end of Product Name dari Halaman Edit Entitas Utama */}
          
//               <br />
//               <br />
          
//               {/* Product Price dari Halaman Edit Entitas Utama */}
//               <div class="sm:col-span-4">
//                   <label htmlFor="price" class="block text-lg font-bold leading-6 text-black ">Price</label>
//                   <div class="mt-2">
//                       <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                           <span class="flex select-none items-center pl-3 text-black font-semibold sm:text-sm">RP/</span>
//                           <input type="text" name="price" id="price" autocomplete="price" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-350 focus:ring-0 sm:text-sm sm:leading-6" placeholder="350.000" />
//                       </div>
//                   </div>
//               </div>
//               {/* end of Product Price dari Halaman Edit Entitas Utama */}
          
//               <br />
//               <br />
                    
//               {/* Product Description dari Halaman Edit Entitas Utama */}
//               <div class="col-span-full">
//                   <label htmlFor="about" class="block text-lg font-bold leading-6 text-black ">Description</label>
//                   <div class="mt-2">
//                       <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
//                   </div>
//               </div>
//               {/* end of Product Description dari Halaman Edit Entitas Utama */}
            
//               <br />
//               <br />
            
//               {/* Product Image Url dari Halaman Edit Entitas Utama */}
//               <div class="col-span-full">
//                   <label htmlFor="cover-photo" class="block text-lg font-bold leading-6 text-black ">Image Url</label>
//                   <div class="mt-2">
//                       <input type="text" id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/4511b3e46afa2793c0975111f9c21f75507cc740_xxl-1.jpg"/>
//                   </div>
//               </div>
//               {/* end of Product Image Url dari Halaman Edit Entitas Utama */}
                
//               <br />
//               <br />
            
//               {/* Product Stock dari Halaman Edit Entitas Utama */}
//               <div class="sm:col-span-4">
//                   <label htmlFor="stock" class="block text-lg font-bold leading-6 text-black ">Stock</label>
//                   <div class="mt-2">
//                       <input id="stock" name="stock" type="stock" autocomplete="stock" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
//                   </div>
//               </div>
//               {/* end of Product Stock dari Halaman Edit Entitas Utama */}
          
//               <br />
//               <br />
            
//               {/* Product Category Dropdown dari Halaman Edit Entitas Utama */}
//               <div class="sm:col-span-3">
//                   <label htmlFor="country" class="block text-lg font-bold leading-6 text-black ">Category</label>
//                   <div class="mt-2">
//                       <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
//                           <option>Tops</option>
//                           <option>Bottoms</option>
//                           <option>Dress</option>
//                           <option>Outerwears</option>
//                           <option>Sportswears</option>
//                       </select>
//                   </div>
//               </div>
//               {/* end of Product Category Dropdown dari Halaman Edit Entitas Utama */}

//               <br />
//               <br />
//               <hr />
//               <br />
          
//               {/* Update Button dari Halaman Edit Entitas Utama */}
//               <div class="pt-4 flex items-center space-x-4">
//                   <button class="bg-black flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Update</button>
//               </div>
//               {/* end of Update Button dari Halaman Edit Entitas Utama */}
//             </form>
//       </section>
//     {/* end of Halaman Edit Entitas Utama */}



//     <br />
//     <br />
//     <hr />
//     <br />
//     <br />



//     {/* Halaman Upload Image Entitas Utama */}
//       <section class="rounded-xl bg-gray-100 px-16 py-10 shadow-2xl  max-sm:px-8">
//           {/* Judul Halaman Upload Image Entitas Utama */}
//           <div class="bg-red-800 p-4 border-t-2  border-indigo-400 rounded-t">
//               <div class="max-w-sm mx-auto md:w-full md:mx-0">
//                 <div class="inline-flex items-center space-x-4">
//                   <h1 class="block text-3xl rounded text-white font-bold flex items-center justify-center">Update Product Image</h1>
//                 </div>
//               </div>
//           </div>
//           {/* end of Judul Halaman Upload Image Entitas Utama */}
        

//           {/* Current Image dari Halaman Upload Image Entitas Utama */}
//           <img class="h-auto max-w-full" src="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/e5832cf720027c87871b96a99f7ab18e21ab182d_xxl-1.jpg" alt="image description" />
//         {/* end of Image dari Halaman Upload Image Entitas Utama */}

//           {/* Tempat Upload Image dari Halaman Upload Image Entitas Utama */}
//           <div class="col-span-full">
//               <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//                 <div class="text-center">
//                   <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
//                     <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
//                   </svg>
//                   <div class="mt-4 flex text-sm leading-6 text-gray-600">
//                     <label htmlFor="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
//                       <span>Upload a file</span>
//                       <input id="file-upload" name="file-upload" type="file" class="sr-only" />
//                     </label>
//                     <p class="pl-1">or drag and drop</p>
//                   </div>
//                   <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//                 </div>
//               </div>
//             </div>
//             {/* end of Tempat Upload Image dari Halaman Upload Image Entitas Utama */}

//           {/* Change Button dari Halaman Upload Image Entitas Utama */}
//           <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
//           {/* end of Change Button dari Halaman Upload Image Entitas Utama */}
//       </section>
//     {/* end of Halaman Upload Image Entitas Utama */}



//     <br />
//     <br />
//     <hr />
//     <br />
//     <br />



//     {/* Halaman List Entitas Kedua */}
//       <section className="container px-4 mx-auto bg-gray-100">

//       {/* Judul Halaman List Entitas Utama */}
//       <div className="bg-red-800 p-4 border-t-2  border-indigo-400 rounded-t">
//           <div className="max-w-sm mx-auto md:w-full md:mx-0">
//             <div className="inline-flex items-center space-x-4">
//               <h1 className="block text-3xl rounded text-white font-bold flex items-center justify-center">Categories List</h1>
//             </div>
//           </div>
//       </div>
//       {/* end of Judul Halaman List Entitas Utama */}



//       {/* All About Table */}
//       <div className="flex flex-col mt-6">
//           <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//               <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//                   <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
//                       {/* Table */}
//                       <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">

//                           {/* Table Header */}
//                           <thead className="bg-red-800">
//                               <tr>
//                                   <th scope="col" className="py-3.5 px-4 text-sm text-left rtl:text-right text-white font-bold">
//                                       <button className="flex items-center gap-x-3 focus:outline-none">
//                                           <span>Id</span>
//                                       </button>
//                                   </th>

//                                   <th scope="col" className="px-12 py-3.5 text-sm text-left rtl:text-right text-white font-bold">
//                                       Name
//                                   </th>
//                                 </tr>
//                           </thead>
//                           {/* end of Table Header */}


//                           {/* Kumpulan Row Data */}
//                           <tbody className="bg-white">
//                               {/* 1st Table Data */}
//                               <tr>
//                                   <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
//                                       <div>
//                                           <p className="text-sm font-normal text-black">catalogapp.io</p>
//                                       </div>
//                                   </td>
//                                   <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
//                                       <div>
//                                           <p className="text-sm font-normal text-black">catalogapp.io</p>
//                                       </div>
//                                   </td>
//                               </tr>
//                               {/* end of 1st Table Data */}
//                           </tbody>
//                           {/* end of Kumpulan Row Data */}
//                       </table>
//                       {/* end of Table */}
//                   </div>
//               </div>
//           </div>
//       </div>
//       {/* end of All About Table */}

//       </section>
//     {/* end of Halaman List Entitas Kedua */}



//     <br />
//     <br />
//     <hr />
//     <br />
//     <br />



//     {/* Halaman Add User */}
//       <section className="container px-4 mx-auto bg-gray-100">

//       <div className="h-screen md:flex">

//       {/* 1  */}
//           <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{backgroundImage: "url('https://i.pinimg.com/564x/23/01/70/230170b1b6dfa3721ebc5abcfe9b7b89.jpg')"}}>
//               <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
//               <div className="w-full px-24 z-10">
//                   <h1 className="text-5xl text-red-700 font-bold text-left tracking-wide">C L O T H E N I T Y</h1>
//                   <p className="text-3xl my-4 text-white">A classic that is loved by all.</p>
//               </div>
//           </div>
//       {/* end of 1 */}

//       {/* 2 */}
//           <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
//               <div className="bg-grey-lighter min-h-screen flex flex-col">
//               <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">

//               {/* 2a */}
//                   <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
//                       <h1 className="mb-8 text-3xl text-center font-bold">Register Staff</h1>


//                       <input 
//                           type="text"
//                           className="block border border-grey-light w-full p-3 rounded mb-4"
//                           name="fullname"
//                           placeholder="Username" />


//                       <input 
//                           type="text"
//                           className="block border border-grey-light w-full p-3 rounded mb-4"
//                           name="email"
//                           placeholder="Email" />


//                       <input 
//                           type="password"
//                           className="block border border-grey-light w-full p-3 rounded mb-4"
//                           name="password"
//                           placeholder="Password" />


//                       <input 
//                           type="password"
//                           className="block border border-grey-light w-full p-3 rounded mb-4"
//                           name="confirm_password"
//                           placeholder="Confirm Password" />


//                       <input 
//                           type="text"
//                           className="block border border-grey-light w-full p-3 rounded mb-4"
//                           name="phoneNumber"
//                           placeholder="Phone Number" />


//                       <textarea 
//                           className="block border border-grey-light w-full p-3 rounded mb-4"
//                           name="address"
//                           placeholder="Address"></textarea>


//                       <button
//                           type="submit"
//                           className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
//                       >Create Account</button>


//                       <div className="text-center text-sm text-grey-dark mt-4">
//                           By signing up, you agree to the 
//                           <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
//                               Terms of Service
//                           </a> and 
//                           <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
//                               Privacy Policy
//                           </a>
//                       </div>
//                   </div>
//               {/* end of 2a */}

//               {/* 2b */}
//                   <div className="text-grey-dark mt-6">
//                       Already have an account? 
//                       <a className="no-underline border-b border-blue text-blue" href="../login/">
//                           Log in
//                       </a>.
//                   </div>
//               {/* end of 2b */}

//               </div>
//               </div>
//           </div>
//       {/* end of 2 */}

//       </div>

//       </section>
//     {/* end of Halaman Add User */}

//   </>
// 	)
// }

// export default App
