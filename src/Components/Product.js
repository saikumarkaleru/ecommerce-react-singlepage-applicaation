import React,{Component} from 'react';
//import styled from 'styled-components';
import {Link } from 'react-router-dom';
import {ProductWrapper} from './styledComponents'
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';
class Product extends Component{
  render(){
  	const {id,title,img,price,inCart} =this.props.product;
    return (
    	<ProductWrapper className=" col-9 mx-auto col-md-6 col-lg-3 my-3">
    	<div className="card">
    <ProductConsumer>
          {
            value=>(<div className="img-container p-5">
                          <div
                			    	onClick={()=> {value.handleDetail(id);
                                        value.openModal(id);}
                                      }>
                				    <Link to="/details">
                				    	<img src={img} alt="product"  className=" card-img-top" />
                		     		</Link>
                          </div>
                          <Link to="/cart">
                		     <button className="card-btn w-20 btn btn-light" disabled={inCart? true :false}
                		     onClick={()=>value.addToCart(id)} >
                		     	{ inCart?(<p className=" text-capitalize " disabled>{" "} in cart</p>)
                		     	: (<i className=" fa fa-shopping-cart fa-lg"/> )}
                		     </button></Link>
    		             </div>)
          }
    </ProductConsumer>
		     <div className=" card-footer d-flex justify-content-between">
		     <p className=" align-self-center mb-0"> {title}</p>
		     <h5 className=" text-blue font-italic mb-0"><span className='mr-1'> $</span> {price}</h5></div>
    	</div>
    	</ProductWrapper>
);
 }
}
export default Product;
Product.propTypes={
	product:PropTypes.shape({
	id:PropTypes.number,
	img:PropTypes.string,
	title:PropTypes.string,
	price:PropTypes.number,
	inCart:PropTypes.bool
}).isRequired
}
