import React,{Component} from 'react';
export default class Default extends Component{
  render(){
    return (
    <div className="container">
 <div className="roe">

<div className=" col-10 mx-auto text-center text-title" >

<h1  className=" display=3">       404</h1>
<h2>         error</h2>
<h3>    page  not found</h3>

<h4>        requested Url was

<span className="text-danger"> {this.props.location.pathname}</span> not found
</h4>
</div>

 </div>

     </div>
);
  }
}
;
