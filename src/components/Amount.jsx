import format from "format-number";
import React from 'react'

const Amount =(props)=>{
    return (
        <div className="App-amount">
            {format({prefix: '$'}) (props.balance)}
            
            <p className="amount--info">Total Amount</p>

        </div>
    )
}
export default Amount;