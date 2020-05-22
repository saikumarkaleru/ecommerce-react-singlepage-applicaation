import Title from '../Title';
import React,{Component} from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './emptycart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './Carttotals'
export default class Cart extends Component{
  render(){
    return (
    <section>
      <ProductConsumer>
          {
            value=>{
              const {cart}=value;
              if(cart.length>0){
                return (
                  <React.Fragment>
                    <Title name=" your " title="cart" />
                    <CartColumns />
                    <CartList  value={value}/>
                    <CartTotals value={value}/>
                  </React.Fragment>
                )
              }
              else {
                {
                  return <EmptyCart />
                }
              }
            }
          }
      </ProductConsumer>
    </section>
);
  }
};
