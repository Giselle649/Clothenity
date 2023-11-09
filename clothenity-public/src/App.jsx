//Import function yang dibutuhkan untuk mengakses data reaktif (state) pada React
import { useState } from "react";

function App() {
  // Di sini kita akan menggunakan "data" yang bisa digunakan secara "reaktif"
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  
  return (
    <>     

      {/* NAVBAR */}
      <nav className="flex justify-between bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-green-950">
          {/* 1 */}
          <div className="flex">
              <span> </span>
          </div>
          {/* end of 1 */}

          {/* 2 */}
          {/* Logo Component */}
          <div className="flex lg:w-auto lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
              <div className="flex items-center flex-shrink-0s mr-16 text-red-700 mx-auto">
                  <span className="font-semibold text-xl tracking-tight"><b>C  L  O  T  H  E  N  I  T  Y</b></span>
              </div>
          </div>
          {/* end of Logo Component */}
          {/* end of 2 */}

          {/* 3 */}
          <div className="flex">
              {/* Search Component */}
              <div className="relative text-gray-600 lg:block hidden">
                  <input
                      className="border-2 border-green-950 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                      type="search" name="search" placeholder="Search" />
                  <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                      <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                          version="1.1" id="Capa_1" x="0px" y="0px"
                          viewBox="0 0 56.966 56.966" style={{enableBackground: "new 0 0 56.966 56.966"}}
                          xml:space="preserve"
                          width="512px" height="512px">
                  <path
                      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
                  </button>
              </div>
              {/* end of Search component */}


              <div className="flex ">
                  {/* Home Button Component */}
                  <a href="#"
                  className=" block text-md px-4  ml-2 py-2 rounded text-red-700 font-bold hover:text-black mt-4 lg:mt-0">Home</a>
                  {/* end of Home Button Component */}

                  {/* Log In Button (FOR ADMIN) Component */}
                  <a href="#"
                  className=" block text-md px-4  ml-2 py-2 rounded text-red-700 font-bold hover:text-black mt-4 lg:mt-0">Log In</a>
                  {/* Log In Button (FOR ADMIN) Component */}
              </div>
          </div>
          {/* end of 3 */}
      </nav>
      {/* end of NAVBAR */}


      <br />


      {/* Halaman Home */}
      <section>
          {/* TITLE OF PAGE */}
          <div className="flex text-black px-5">
              <h1 className="font-semibold text-xl text-red-700">ALL PRODUCTS</h1>
          </div>
          {/* end of TITLE OF PAGE */}


          <br />

          {/* DROPDOWN (SORT BY & ALL FILTERS) */}
          <div className="flex flex-row">
              {/* SORT BY */}
                  {/* SORT BY (Button) */}
                  <button id="dropdownRadioBgHoverButton" data-dropdown-toggle="dropdownRadioBgHover" className="flex text-black text-red-700 hover:text-black px-5" type="button">Sort By 
                      <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                      </svg>
                  </button>
                  {/* end of SORT BY (Button) */}

                  {/* SORT BY (Choices) */}
                  <div id="dropdownRadioBgHover" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                      <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">
                      <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <input id="default-radio-4" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                              <label htmlFor="default-radio-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default radio</label>
                          </div>
                      </li>
                      <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <input checked id="default-radio-5" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                              <label htmlFor="default-radio-5" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Checked state</label>
                          </div>
                      </li>
                      <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <input id="default-radio-6" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                              <label htmlFor="default-radio-6" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default radio</label>
                          </div>
                      </li>
                      </ul>
                  </div>
                  {/* end of SORT BY (Choices) */}
              {/* end of SORT BY */}    

              {/* ALL FILTERS */}
                  {/* ALL FILTERS (Button) */}
                  <button id="dropdownDefault"data-dropdown-toggle="dropdownRadioBgHover" className="flex text-black text-red-700 hover:text-black px-5" type="button">
                      Filter by category
                      <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                  </button>
                  {/* end of ALL FILTERS (Button) */}
        
                  {/* ALL FILTERS (Choices) */}
                  <div id="dropdown" className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                      <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                      Category
                      </h6>
                      <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                      <li className="flex items-center">
                          <input id="apple" type="checkbox" value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                          <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                          Apple (56)
                          </label>
                      </li>

                      <li className="flex items-center">
                          <input id="fitbit" type="checkbox" value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                          <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                          Fitbit (56)
                          </label>
                      </li>

                      <li className="flex items-center">
                          <input id="bosch" type="checkbox" value="" checked
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                          <label htmlFor="bosch" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                          Bosch (176)
                          </label>
                      </li>

                      </ul>
                  </div>
                  {/* end of ALL FILTERS (Choices) */}
          </div>
          {/* end of DROPDOWN (SORT BY & ALL FILTERS) */}



          {/* CARDS  */}
          <div className="flex space-x-4 space-y-4">
              <div></div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="w-full object-cover" src="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/e5832cf720027c87871b96a99f7ab18e21ab182d_xxl-1.jpg" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Turtleneck Top</div>
                      <p className="text-gray-700 text-base">
                          Rp 349.900
                      </p>
                  </div>
              </div>

              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="w-full object-cover" src="https://static.zara.net/photos///2023/I/0/1/p/3641/844/641/2/w/607/3641844641_1_1_1.jpg?ts=1696342627538" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">POLYAMIDE CROP TOP</div>
                  <p className="text-gray-700 text-base">
                      Rp 500.000
                  </p>
                  </div>
              </div>

              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="w-full object-cover" src="https://static.zara.net/photos///2023/I/0/1/p/6164/232/427/2/w/315/6164232427_2_3_1.jpg?ts=1698918647867" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2"> MID WAIST WIDE LEG RHINESTONE JEANS</div>
                  <p className="text-gray-700 text-base">
                      RP 700.000
                  </p>
                  </div>
              </div>

              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="w-full object-cover" src="https://static.zara.net/photos///2023/I/0/1/p/3046/303/808/2/w/563/3046303808_1_1_1.jpg?ts=1695380599508" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">FAUX LEATHER BIKER JACKET</div>
                  <p className="text-gray-700 text-base">
                    RP 800.000
                  </p>
                  </div>
              </div>
              <div></div>

          </div>
          {/* end of CARDS */}


          <br/>


          <br/>

          {/* PAGINATION */}
          <nav className="flex justify-center">
              <ul className="list-style-none flex">
                <li>
                  <a
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-black dark:hover:bg-neutral-700 dark:hover:text-black"
                    href="#"
                    aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li>
                  <a
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-black dark:hover:bg-neutral-700 dark:hover:text-black"
                    href="#"
                    >1</a
                  >
                </li>
                <li aria-current="page">
                  <a
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-black dark:hover:bg-neutral-700 dark:hover:text-black"
                    href="#"
                    >2</a
                  >
                </li>
                <li>
                  <a
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-black dark:hover:bg-neutral-700 dark:hover:text-black"
                    href="#"
                    >3</a
                  >
                </li>
                <li>
                  <a
                    className="relative block rounded bg-black px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-black"
                    href="#"
                    aria-label="Next"
                    ><span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* end of PAGINATION */}
      </section>
      {/* end of Halaman Home*/}


      <br />
      <hr />
      <hr />


      {/* Halaman Detail */}
      <section>
          {/* 1st Product */}
          <section className="text-gray-700 body-font overflow-hidden bg-white">
              <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/e5832cf720027c87871b96a99f7ab18e21ab182d_xxl-1.jpg" />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">TOP</h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium">Turtleneck Top</h1>
                  <div className="text-sm title-font text-red-600 tracking-widest">
                      <span>100 stock left!</span>
                  </div>
                  <br />
                  <p className="leading-relaxed">Fitted top in a soft rib knit made from a viscose blend with a turtle neck and long sleeves.</p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                      <div className="flex">
                      <span className="mr-3">Color</span>
                      <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      </div>
                      <div className="flex ml-6 items-center">
                      <span className="mr-3">Size</span>
                      <div className="relative">
                          <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                          <option>SM</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                          </select>
                          <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                              <path d="M6 9l6 6 6-6"></path>
                          </svg>
                          </span>
                      </div>
                      </div>
                  </div>
                  <div className="flex">
                      <span className="title-font font-medium text-2xl text-gray-900">Rp 349.900</span>
                      <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded">ADD TO CART</button>
                  </div>
                  </div>
              </div>
              </div>
          </section>
          {/* end of 1st Product */}
      </section>
      {/* end of Halaman Detail */}

    </>
  )
}




export default App