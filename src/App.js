import React, { Component } from "react";
import "./App.css";
import Title from "./component/Title";
import Option from "./component/Option";
import Pricing from "./component/Pricing";

class App extends Component {
  state = {
    pricing: [
      {
        id: 1,
        type: "Basic",
        price: "$199.99",
        features: ["500 GB  Storage", " 2 Users Allowed", "Send Up to 3 GB"],
        isRecommended: false,
      },
      {
        id: 2,
        type: "Professional",
        price: "$249.99",
        features: ["1 TB Storage", " 5 Users Allowed", "Send Up to 10 GB"],
        isRecommended: true,
      },
      {
        id: 3,
        type: "Master",
        price: "$399.99",
        features: ["2 TB  Storage", " 10 Users Allowed", "Send Up to 20 GB"],
        isRecommended: false,
      },
    ],
  };
  changePrice = (check) => {
    if (check) {
      this.setState((prevState) => {
        const newState = {
          ...prevState,
        };
        newState.pricing[0].price = "$19.99";
        newState.pricing[1].price = "$24.99";
        newState.pricing[2].price = "$39.99";
        return newState;
      });
    } else {
      this.setState((prevState) => {
        const newState = {
          ...prevState,
        };
        newState.pricing[0].price = "$199.99";
        newState.pricing[1].price = "$249.99";
        newState.pricing[2].price = "$399.99";
        return newState;
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Title />
        <Option changePrice={this.changePrice} />
        <div className="Price-sec">
          {this.state.pricing.map((item) => (
            <Pricing
              key={item.id}
              type={item.type}
              price={item.price}
              features={item.features}
              isRecommended={item.isRecommended}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
