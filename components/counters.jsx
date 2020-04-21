import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  counterStyle = {
    border: '0.5px transparent solid', background: 'rgba(0, 0, 0, 0.65)',
    borderRadius: '13px', position: 'absolute', top: '50%', left: '50%', transform: "translate(-50%, -50%)",
    padding: '1.5em 2.5em',
  }

  render() {

    // Destructuring object - In this case it means each object listed between the braces belongs to this.props
    const { onReset, counters, onDelete, onIncrement, bigSum, onDecrease} = this.props;
  
    return (
      <div style={this.counterStyle}>
        <button onClick={onReset} style={this.buttonStyle, {marginLeft: '2.5em', marginTop: '2.5em'}} className="btn btn-primary btn-sm m-12">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDecrease={onDecrease}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            bigSum={bigSum}
          />
    ))}
      </div>
    );
  }
}

export default Counters;
