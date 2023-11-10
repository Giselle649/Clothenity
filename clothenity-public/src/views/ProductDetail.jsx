
import { Link, useNavigate, useParams } from "react-router-dom";
import axios, { all } from "axios";
import { useState, useEffect } from "react";



const ProductDetail = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [allProducts, setAllProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            setLoading(true)
            const {data} = await axios.get(`http://localhost:3000/pub/${id}`)
            //console.log(data, '19');
            //console.log(data.product, '20');
            setAllProducts(data)
        }catch(error){
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


    // return (
    //     JSON.stringify(allProducts.product.imgUrl)
    // )

  
    return (
        <>
    {/* Halaman Detail */}
      <section>
          {/* 1st Product */}
          <section className="text-gray-700 body-font overflow-hidden bg-white">
              <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">


    
                  <img alt="ecommerce" 
                  className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" 
                  src={allProducts?.product?.imgUrl} />
                  
                  
                  
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">


                  <h2 className="text-sm title-font text-gray-500 tracking-widest">{allProducts?.product?.Category?.name}</h2>


                  <h1 className="text-gray-900 text-3xl title-font font-medium">{allProducts?.product?.name}</h1>



                  <div className="text-sm title-font text-red-600 tracking-widest">
                      <span>{allProducts?.product?.stock}stock left!</span>
                  </div>


                  <br />


                  <p className="leading-relaxed">{allProducts?.product?.description}</p>
                  
                  
                  
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
                      <span className="title-font font-medium text-2xl text-gray-900">{allProducts?.product?.price}</span>

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

export default ProductDetail