import React, { Component } from 'react';

 class Counter extends Component {
    constructor (props) {
        super(props);
        this.state ={
            sayi : 0
        }
    }

    
sayiArtir = () => {
    const randomSayi = Math.floor(Math.random()*10)
    this.setState({
        sayi : this.state.sayi + randomSayi
    })
}

sayiAzalt = () => {
    const randomSayi = Math.floor(Math.random()*10)
    this.setState({
        sayi : this.state.sayi - randomSayi
    })
}

    render () {
        return (
            <div className="App" style= {{backgroundColor:'lightgrey'}}>
                <h3>Click buttons to increase and decrease the counter</h3>
                <p>{this.state.sayi}</p>
                <button onClick= {this.sayiArtir}>sayiArtir</button>
                <button onClick= {this.sayiAzalt}>sayiAzalt</button>

            </div>
        );
    }


}

export default Counter;