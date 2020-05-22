import React from 'react';
import EmptyCard from './emptycart';
export default function CartColumns() {
  return (
    <div className="container-fluid  text-center d-none d-lg-block">
        <div  className="row">
          <div  className="col-10 mx-auto col-lg-2">
            <p > products </p>
          </div>
          <div  className="col-10 mx-auto col-lg-2">
            <p >name of product </p>
          </div>
          <div  className="col-10 mx-auto col-lg-2">
            <p > Price </p>
          </div>
          <div  className="col-10 mx-auto col-lg-2">
            <p > Quantity </p>
          </div>
          <div  className="col-10 mx-auto col-lg-2">
            <p > Remove</p>
          </div>
          <div  className="col-10 mx-auto col-lg-2">
            <p > Total </p>
          </div>
       </div>
    </div>
  );
}
