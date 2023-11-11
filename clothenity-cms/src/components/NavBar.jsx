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
        {/* Product List Button Component */}
        <Link to="/products" className="text-md px-4 ml-2 py-2 rounded text-red-700 font-bold hover:text-black mt-4 lg:mt-0">Product List</Link>
        {/* end of Product List Button Component */}


        {/* Create New Product Button Component */}
        <Link to="/addproduct" className="text-md px-4 ml-2 py-2 rounded text-red-700 font-bold hover:text-black mt-4 lg:mt-0">Create New Product</Link>
        {/* end of Create New Product Button Component */}


        {/* Category List Button Component */}
        <Link to="/categories" className="text-md px-4 ml-2 py-2 rounded text-red-700 font-bold hover:text-black mt-4 lg:mt-0">Category List</Link>
        {/* end of Category List Button Component */}


        {/* Register Staff Button Component */}
        <Link to="/registerstaff" className="text-md px-4 ml-2 py-2 rounded text-red-700 font-bold hover:text-black mt-4 lg:mt-0">Register Staff</Link>
        {/* end of Register Staff Button Component */}
        
  
        {/* Log Out Button Component */}
        <Link to="/login" className="text-md px-4 ml-2 py-2 rounded text-red-700 font-bold hover:text-black mt-4 lg:mt-0">Log Out</Link>
        {/* end of Log Out Button Component */}
    </div>
    {/* end of 3 */}
</nav>
{/* end of NAVBAR */}
        </>
    )
}

export default NavBar