import React,{useState} from 'react'

function Card({cart,setCart,json}) {
    let [item,setItem] = useState(true)

  return   <div className="col mb-5">
  <div className="card h-100">
     {json.isSale?(<><div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right:"0.5rem"}}>Sale</div></>):("")}

      <img className="card-img-top" src={json.image} alt="..." />

      <div className="card-body p-4">
          <div className="text-center">

              <h5 className="fw-bolder">{json.title}</h5>

             {json.isReviews?(<><div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
              </div></>) :("")}

             {json.isPrice?(<div><span className="text-muted text-decoration-line-through">{json.mutedPrice}</span>
              {json.price}</div>):(json.price)}
         </div></div>
     <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {
           item? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
            setCart(cart+1)
            setItem(false)
          }}>Add to cart</button>:
          <button className="btn btn-outline-dark mt-auto" onClick={()=>{
            setCart(cart-1)
            setItem(true)
          }}>Remove from cart</button>
        }
          </div>
      </div>
  </div>
</div>
}
export default Card