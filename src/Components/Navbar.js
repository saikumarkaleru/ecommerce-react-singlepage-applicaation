import React,{Component} from 'react';

import { Navbar ,Nav}  from 'react-bootstrap';

import logo from "../logo.svg";
class NavbarComp extends Component{
  render(){
    return (
   <div> 
  <Navbar bg="info" expand="sm">
  <Navbar.Brand href="/"><img
        src={logo}
        width="30"
        height="30"
      /></Navbar.Brand>
 <Navbar.Toggle />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto ">
      <Nav.Link href="/" className='text-white'><i className="fa fa-home fa-lg btn-info"></i>Home</Nav.Link>
      <Nav.Link href="/products" className='text-white'>products</Nav.Link>  
    </Nav>
    <Nav>
     <Nav.Link href="cart" className=" mr-sm-4 text-white " >
     <span className="mr-2"><i className="fa fa-shopping-cart fa-lg"></i></span>Cart</Nav.Link></Nav>
  </Navbar.Collapse>
</Navbar>
 </div>
);
  }
}

export default NavbarComp;
