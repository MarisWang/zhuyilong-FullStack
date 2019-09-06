import React, {Component} from 'react';
import {Carousel} from "antd";

export default class IndexPage extends Component {
  render() {
    let {carousels}=this.props;
    return (
      <Carousel autoplay>
        {
          carousels.map((item)=>
            <img src={item.img} alt={item.img} key={item.id}/>
          )
        }
      </Carousel>
    );
  }
}

