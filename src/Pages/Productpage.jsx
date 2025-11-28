import Product from "../components/product";


export default function Productpage (){
    const productsList = Array(8).fill(0);
    return (
        <>
         <div className="container py-3 row">

        <h1 className="m-3">our product</h1>
         {productsList.map(( index) => (
          <div key={index} className=" col-lg-3 col-12 ">
             <Product />
          </div>
        ))}
         </div>
        </>
    )
}


