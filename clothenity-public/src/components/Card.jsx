
import { useNavigate } from "react-router-dom"
import ProductDetail from "../views/ProductDetail"



const Card = (props) => {
    const navigate = useNavigate()
    let handleClick = ((id, E) => {
        navigate(`/${id}`)
    })

    const {eachProduct, index} = props
    return (
        <>
       {/* CARDS  */}
       <div className="flex space-x-4 space-y-4" key={index}>
       <div></div>
       <div className="max-w-sm rounded overflow-hidden shadow-lg">
           <img className="w-full object-cover" src={eachProduct.imgUrl} alt="Sunset in the mountains" />
           <div className="px-6 py-4">
               <div className="font-bold text-xl mb-2">{eachProduct.name}</div>
               <p className="text-gray-700 text-base">
                   {eachProduct.price}
               </p>
           </div>
           <button onClick={() => handleClick(eachProduct.id)} >See Detail</button>
       </div>
   </div>
   {/* end of CARDS */}  
   </>
    )
}

export default Card