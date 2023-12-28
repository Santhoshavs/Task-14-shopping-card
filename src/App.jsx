import React,{useState} from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  let [cart,setCart]=useState(0)
  let json=[
    {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Fancy Product",
      price: "$40.00 - $80.00",
      mutedPrice:"",
      isSale:false,
      isReviews:false,
      isPrice:false
    },
    {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Special Item",
      price: " $18.00",
      mutedPrice:"$20.00",
      isSale:true,
      isReviews:true,
      isPrice:true
    },
    {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Sale Item",
      price: " $25.00",
      mutedPrice:"$50.00",
      isSale:true,
      isReviews:false,
      isPrice:true
    },
    {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Popular Item",
      price: " $40.00",
      mutedPrice:"",
      isSale:false,
      isReviews:true,
      isPrice:false
    },
    {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Sale Item",
      price: "$25.00",
      mutedPrice:"$50.00",
      isSale:true,
      isReviews:false,
      isPrice:true
    },
    {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Fancy Product",
      price: " $120.00 - $280.00",
      mutedPrice:"",
      isSale:false,
      isReviews:false,
      isPrice:false
    },
    {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Special Item",
      price: "$18.00",
      mutedPrice:"$20.00",
      isSale:true,
      isReviews:true,
      isPrice:true
    },
    {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Popular Item",
      price: " $40.00",
      mutedPrice:"",
      isSale:false,
      isReviews:true,
      isPrice:false
    }
  ]
  return <>
  <TopBar cart={cart} setCart={setCart}/>
     <Header/>

     <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
json.map((ele,i)=>{
  return <Card json={ele} key={i} cart={cart} setCart={setCart}/>
})


                  }

                </div>
     </div>
     </section>
     <Footer/>
  </>
}

export default App