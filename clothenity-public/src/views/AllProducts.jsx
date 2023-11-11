import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";



const AllProducts = (props) => {
  
    const navigate = useNavigate()
    const [allProducts, setAllProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            setLoading(true)
            //clg dulu data, dan liat di console browser, bukan liat di postman
            const {data} = await axios.get('http://localhost:3000/pub?page=1&limit=10')
            setAllProducts(data.data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    //ini selalu ada di semua page
    //mounted effect
    useEffect(() => {
        //disini kita mau ambil data
        fetchData()
    }, [])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error fetching, please try again</p>



    return (
        <>
    {/* Halaman Home */}
      <section>
          {/* TITLE OF PAGE */}
          <div className="flex text-black px-5">
              <h1 className="decoration-dashed sfont-semibold text-xl text-red-700">ALL PRODUCTS</h1>
          </div>
          {/* end of TITLE OF PAGE */}


          <br />

          {/*SORT BY & ALL FILTERS */}
          <div className="flex flex-row">
              {/* SORT BY */}
                  <select className="flex px-5 text-red-700 font-bold mr-11">
                        <option className="font-bold" value="Sort By" disabled defaultValue>Sort By</option>
                        <option value="newestData">Newest Data</option>
                        <option value="oldestData">Oldest Data</option>
                    </select>
              {/* end of SORT BY */}  

              <br />  

              {/* ALL FILTERS */}
                  <div id="dropdown">
                    <form>
                    <h3 className="flex px-5 text-red-700 font-bold">Filter By Category</h3>
                    <hr />
                    <input type="checkbox" id="tops" name="tops" value="tops"/>
                    <label htmlFor="tops">Tops</label><br/>

                    <input type="checkbox" id="bottoms" name="bottoms" value="bottoms"/>
                    <label htmlFor="bottoms">Bottoms</label><br/>

                    <input type="checkbox" id="dress" name="dress" value="dress" />
                    <label htmlFor="dress">Dress</label><br/>

                    <input type="checkbox" id="outerWears" name="outerWears" value="outerWears"/>
                    <label htmlFor="outerWears">Outerwears</label><br/>

                    <input type="checkbox" id="sportsWears" name="sportsWears" value="sportsWears" />
                    <label htmlFor="sportsWears">Sportswears</label><br/>

                    <button className="text-white font-bold bg-red-700" value="Filter">Filter</button>
                    </form>
                  </div>
            {/* end of ALL FILTERS */}
          </div>
          {/* end of SORT BY & ALL FILTERS */}

        
              {allProducts.map((eachProduct, index) => (
                <>
                  <Card eachProduct={eachProduct} index={index}/>
                </>
              ))}


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
        </>
    )
}

export default AllProducts