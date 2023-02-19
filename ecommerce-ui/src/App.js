import React from 'react';
import './App.css';
import Rental from './Rental.js';
import bnbData from './_data/bnbs.json';

class App extends React.Component {

  state = {
    selectedHomes: [],
    totalCost: 0
  }

  handleCallback = (childData) => {
    this.setState({ selectedHomes: childData, totalCost:this.state.totalCost+childData.cost })
  }

  render() {
    const { selectedHomes } = this.state;
    return (
      <div className="outer-div">
        <div className="wrapper"><h1>Homes for you...</h1> </div>
        <div className="wrapper">
          {bnbData.map((bnb) => (
            <Rental
              title={`${bnb.title}`}
              location={`${bnb.location.city} , ${bnb.location.country}`}
              image={`${bnb.image}`}
              cost={bnb.payment.cost}
              payment_info={`$ ${bnb.payment.cost}, ${bnb.payment.description}`}
              parentCallback={this.handleCallback}
            />
          ))}
        </div>
        <div className="wrapper">
          <h3>Selected home</h3>
        </div>
        <div className="wrapper">
          <Rental
              title={`${selectedHomes.title}`}
              location={`${selectedHomes.location}`}
              image={`${selectedHomes.image}`}
              payment_info={`$ ${selectedHomes.payment_info}}`}
            />
          <div>Total Cost: ${this.state.totalCost}</div>
        </div>
        

      </div>
    );
  }

}

export default App;
