import React, { Component } from 'react'
import '../CounterByClassComp/indexC.css'



class CounterClass extends React.Component {
    state = {
        counter: 0
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div className='mainCounter'>
                <h2>COUNTER</h2>
                <button className="counter-button" onClick={this.increment}>
                    +
                </button>
                <input className="counter" value={this.state.counter >= 0 ? this.state.counter : 0}>

                </input>
                <button className="counter-button" onClick={this.decrement}>
                    -
                </button>
            </div>
        );
    }
}

export default CounterClass; 