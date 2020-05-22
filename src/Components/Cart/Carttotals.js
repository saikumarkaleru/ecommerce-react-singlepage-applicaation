
import React  from 'react';
import {Link} from 'react-router-dom';
export default function CartTotals({value}) {
const {cartSubTotal,cartTax,cartTotal,clearCart}=value;
return (
  <div className="container">
       <div className="row">
           <div className=" col-10 mt-2 ml-sm-55 ml-md-auto col-sm-8 text-right">
             <Link to="/">
           <button className=" btn btn-outline-danger mb-3 px-5 "
            onClick={()=>value.clearCart()}>
            Clear Cart
             </button>
           </Link>

              <h5>
                <span className="text-title">
                  subtotal:
                 </span>
                 <strong> ${cartSubTotal} </strong>
               </h5>
           <h5>
           <span className="text-title">
             Tax:
            </span>
            <strong> ${cartTax} </strong>
            </h5>
            <h5>
            <span className="text-title">
              total:
             </span>
             <strong> ${cartTotal} </strong>
             </h5>
               </div>
       </div>
   </div>
)
}
