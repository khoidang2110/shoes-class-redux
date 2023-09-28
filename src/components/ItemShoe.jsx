import React, { Component } from "react";
import { connect } from "react-redux";
import { BUY_SHOE, VIEW_DETAIL } from "./redux/constant/shoe";
import { buyShoeAction, handleViewDetailAction } from "./redux/action/shoe";

class ItemShoe extends Component {
  convertNameShoe = (name) => {
    let maxLength = 12;
    if (name.length > maxLength) {
      return name.slice(0, maxLength) + "...";
    } else {
      return name;
    }
  };

  render() {
    let { image, name, price } = this.props.item;
    return (
      <div className="col-3">
        <div className="card text-left">
          <img className="card-img-top" src={image} alt />
          <div className="card-body">
            <h4 className="card-title">{this.convertNameShoe(name)}</h4>
            <p className="card-text">{price}</p>
            <button
              onClick={() => {
                this.props.handleViewDetail(this.props.item);
              }}
              className="btn btn-info"
            >
              View
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.handleBuy(this.props.item);
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleBuy: (shoe) => {
      // let action = {
      //   type: BUY_SHOE,
      //   payload: shoe,
      // };
      dispatch(buyShoeAction(shoe));
    },
    handleViewDetail: (shoe) => {
      dispatch(handleViewDetailAction(shoe));
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemShoe);
