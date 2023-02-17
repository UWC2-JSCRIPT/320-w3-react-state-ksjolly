import React from 'react';
import './App.css';
import Rental from './Rental.js';
import bnbData from './_data/bnbs.json';

class App extends React.Component {
  // state = {
  //   title: "",
  // }

  // handleCallback = (childData) =>{
  //   this.setState({name: childData})
  // }

  render() {
    // const {title} = this.state;
    return (
      <div className="outer-div">
        <div className="wrapper"><h1>Homes for you...</h1> </div>
        <div className="wrapper">
          {bnbData.map((bnb) => (
            <Rental
              title={`${bnb.title}`}
              location={`${bnb.location.city} , ${bnb.location.country}`}
              image={`${bnb.image}`}
              payment_info={`$ ${bnb.payment.cost}, ${bnb.payment.description}`}
            />
          ))}
        </div>
        <div className="wrapper">
          <h3>Your selected homes...</h3>
          
          {/* {title} */}
        </div>
      </div>
    );
  }

}

export default App;
