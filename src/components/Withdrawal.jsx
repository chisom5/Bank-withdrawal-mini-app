import React from 'react'
import { withdrawal, withdrawAll } from '../store/actions';

import store from '../store';

const Withdrawal =() =>{
    function handleWithdraw (e) {
        let value = e.target.dataset.amount;
        
        // dispatch the action
        store.dispatch(withdrawal(value))
    }

    function giveAwayCash (e) {
        // dispatch action here
        store.dispatch(withdrawAll())
    }

    return (
       
        <div className="App-withdrawal">
            <section className="withdrawal-buttons">
                <button data-amount="10000" onClick={handleWithdraw.bind(this)}>WITHDRAW $10,000</button>
                <button data-amount="5000" onClick={handleWithdraw.bind(this)}>WITHDRAW $5,000</button>
            </section>

            <p className="App-giveaway" onClick={giveAwayCash.bind(this)}>Give away all your cash to charity</p>
        </div>
    );
}
export default Withdrawal;