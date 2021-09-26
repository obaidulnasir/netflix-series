import React from 'react';
import "./Cart.css"

const Cart = (props) => {
   const {picked}= props;
   let total = 0;
   for (const salary of picked){
       total =total + salary.salary;
   }
    
    return (
        <div className="cart">
           <h3> Selected Artist & Cost </h3> 
            <hr />
            <h4>Total Actor Select: {props.picked.length}</h4>
            
            <h5>Total salary : {total}$</h5>
            
        </div>
    );
};

export default Cart;