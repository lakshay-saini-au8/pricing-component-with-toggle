import React, { Component } from "react";
import "../css/Pricing.css";
class Pricing extends Component {
  render() {
    return (
      <div
        className={
          this.props.isRecommended ? "PricingItem isRecommended" : "PricingItem"
        }
      >
        <p className="title">{this.props.type}</p>
        <p className="amount">
          <span>{this.props.price[0]}</span>
          {this.props.price.slice(1)}
        </p>
        <div className="listOption">
          <ul>
            {this.props.features.map((item, index) => (
              <li key={index}> {item}</li>
            ))}
          </ul>
        </div>
        <div className="moreBtn">
          <p>Learn More</p>
        </div>
      </div>
    );
  }
}

export default Pricing;
