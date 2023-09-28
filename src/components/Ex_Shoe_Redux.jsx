import React, { Component } from "react";
import { message } from "antd";
import Cart from "./Cart";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";

export default class Ex_Shoe_Redux extends Component {


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-7">
            <Cart
              
            />
          </div>
          <div className="col-5">
            <ListShoe />
          </div>
        </div>
        <DetailShoe />
      </div>
    );
  }
}
