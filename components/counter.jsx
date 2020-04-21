import React, { Component } from 'react';

class Counter extends Component {

    styles  = {
        fontFamily: "'Alegreya', serif",
        fontSize: '22px',
        fontWeight: '700',
    }


    badgeStyles = {
        color: 'white', fontFamily: 'Lato, serif', border: '0.9px #000 solid',
    }

    buttonStyle = {
        color: 'white', fontWeight: 500, fontSize: '19px',
        fontFamily: "'Alegreya', serif", marginLeft: '2rem', transition: '0.6s',
        padding: '3px 6px', borderRadius: '6px',
    }

    flex = {
        display: 'flex', fontSize: '21px', flexDirection: 'row',
        marginBottom: '2.5rem', marginTop: '2.5rem', marginLeft: '2rem', 
    }


    render() {

        return (
            
            <div style={this.flex}>
                <span style={this.styles} className="badge m-2" style={this.badgeStyles, this.getBadgeColor()}>
                    {this.formatCount()}
                </span>

                <button style={this.block, this.buttonStyle} onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
                    <span>Increment</span>
                </button>

                <button style={this.block, this.buttonStyle} onClick={() => this.props.onDecrease(this.props.counter)} className={this.getBadgeClass()}>
                    <span>Decrease</span>
                </button>

                <button style={this.block, this.buttonStyle} onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">
                    <span>Delete</span>
                </button>
            </div>

        );

    }


    getBadgeColor = () => this.props.counter.value === 0 ? {backgroundColor: 'goldenrod'} : {backgroundColor: 'white'};

    getBadgeClass = () =>  {
        let classes = "btn btn-success btn-sm ";

        classes += this.props.counter.value === 0 ? "disabled" : " ";

        return classes;

    }

    formatCount () {
        const {value: count} = this.props.counter;
        const x = 'none';
        return count === 0 ? x : count; 
    }
}


export default Counter;







