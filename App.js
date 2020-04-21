import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from "./components/counters";
import './App.css';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
        ],

        sum: 0,
    };

    bigSum = () => {
        let sum = (this.state.counters.map(c => c.value)).reduce((passedIn, item) => passedIn + item, 0);

        return sum;
    }

    handleDecrease = counter => {
        let arrCounters = [];
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};

        if (counters[index].value > 0) { counters[index].value--; }

        this.setState( {counters} );
    }

    // Handles the Increment event raised in the <Counter />
    handleIncrement = counter => {
        let arrCounters = [];
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;

        this.setState({ counters });

    };


    // Handle the Delete Event
    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);

        this.setState({ counters });
    };


    // Handle the Reset Event
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;

            return c;

        });

        this.setState({ counters });
    }


    // Handle the NavBar Hover Event
    handleClick = () => {
        const navClicked = true;

        document.querySelector('body').classList.toggle('beach-bg');

        // console.log('Nav Click Successful');

        this.setState( {navClicked} );
    }

    render() { 

        console.log('App mounted');
        //console.log(this.bigSum()); Tests bigSum()

        return ( 
            <React.Fragment>
            <NavBar 
            totalCounters={this.state.counters.filter(c => c.value > 0).length} 
            bigSum={this.bigSum()}
            onNavChange={this.handleClick}
            />

            <main className="container">
                <Counters 
                counters={this.state.counters}
                onDecrease={this.handleDecrease}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
                />
            </main>
            
            </React.Fragment>
        );
    }
}
 
export default App;