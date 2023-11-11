import { Link } from "react-router-dom";


const NavBar = () => {
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
                          xmlSpace="preserve"
                          width="512px" height="512px">
                  <path
                      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
                  </button>
              </div>
              {/* end of Search component */}


              <div className="flex ">
                  {/* Home Button Component */}
                  <Link to="/"
                  className=" block text-md px-4  ml-2 py-2 rounded text-red-700 font-bold hover:text-black mt-4 lg:mt-0">Home</Link>
                  {/* end of Home Button Component */}

              </div>
          </div>
          {/* end of 3 */}
        </nav>
    {/* end of NAVBAR */}
        </>
    )
}

export default NavBar

