import React, {Component} from 'react';
import CarouselComponent from "./carousel";
import AboutComponent from "./about";
import AwardsComponent from "./awards";
import CollectionComponent from "./collection";
import LinkComponent from "./links";
import ConnectionsComponent from "./connections";
import {Layout} from 'antd';

const {Header, Footer, Content,} = Layout;
const dataJson = require("../../js/data.js");

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Header> <CarouselComponent carousels={dataJson.carousels}/> </Header>
        <Content>
          <div className="whitebg content">
            <AboutComponent />
          </div>
          <div className="imgbg bg-1"> </div>
          <div className="whitebg">
            <AwardsComponent/>
          </div>
          <div className="imgbg bg-2"> </div>
          <div className="whitebg">
            <CollectionComponent />
          </div>
          <div className="imgbg bg-3"> </div>
          <div className="whitebg">
            <LinkComponent/>
          </div>
          <div className="imgbg bg-4"> </div>
          <div className="whitebg">
            <ConnectionsComponent />
          </div>
        </Content>
        <Footer>
          <div className="masonry">
            <div className="item">
              <div className="item__content"> </div>
            </div>
            <div className="item">
              <div className="item__content item__content--small"> </div>
            </div>
            <div className="item">
              <div className="item__content item__content--medium"> </div>
            </div>
            <div className="item">
              <div className="item__content item__content--small"> </div>
            </div>
            <div className="item">
              <div className="item__content item__content--medium"> </div>
            </div>
            <div className="item">
              <div className="item__content"> </div>
            </div>
            <div className="item">
              <div className="item__content item__content--large"> </div>
            </div>
            <div className="item">
              <div className="item__content item__content--medium"> </div>
            </div>
            <div className="item">
              <div className="item__content item__content--small"> </div>
            </div>
            <div className="item">
              <div className="item__content"> </div>
            </div>
            <div className="item">
              <div className="item__content item__content--large"> </div>
            </div>
            <div className="item">
              <div className="item__content"> </div>
            </div>
            <div className="item">
              <div className="item__content item__content--small"> </div>
            </div>
            <div className="item">
              <div className="item__content item__content--large"> </div>
            </div>
            <div className="item">
              <div className="item__content item__content--medium"> </div>
            </div>
            <div className="item">
              <div className="item__content item__content--small"> </div>
            </div>
            <div className="item">
              <div className="item__content item__content--medium"> </div>
            </div>
            <div className="item">
              <div className="item__content"> </div>
            </div>
            <div className="item">
              <div className="item__content item__content--small"> </div>
            </div>
          </div>
        </Footer>
      </Layout>
    );
  }
}

