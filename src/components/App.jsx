import React, { Component } from 'react';
import Amount from './Amount';
import Withdrawal from './Withdrawal';

class App extends Component {
   
    render() {
        return ( 
            <div className = "App" >
                <section className="App-profile">
                    <img className="profile-img" src={require('../assets/imgs/girl.png')} alt="user" />
                    <p className="App-username">Hello, {this.props.name}! </p>

                </section>
                
                <Amount balance={this.props.balance}/>

                <Withdrawal />
            </div>
        )

    }
}


export default App;