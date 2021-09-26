import React from 'react';

const Cart = (props) => {
   
    
    return (
        <div>
            <h3>total: {props.picked.length}</h3>
            <h3>salary : {props.picked.demandPerSeries}</h3>
            
        </div>
    );
};

export default Cart;