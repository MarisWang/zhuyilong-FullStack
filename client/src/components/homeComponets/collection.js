import React, {Component} from 'react';
import {Card} from 'antd';
import axios from "axios";
import Config from "../../js/config";

const {Meta} = Card;

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
  }
  componentDidMount() {
    this.fetchCollections();
  }
  /**获取后台数据**/
  fetchCollections = () => {
    axios({
      method: 'POST',
      url: `${Config.uri}graphql`,
      header: {contentType: "application/json",},
      data: {
        query: `query{collects{_id name desc role type img meta{createdAt updatedAt}} }`
      }
    }).then((res) => {
      if (res.statusText === "OK") {
        let result = res.data.data;
        this.setState({
          collections:result["collects"]
        });
      }
    });
  };
  render() {
    let {collections} = this.state;
    return (
      <div className="collectionContent">
        <h2>Collection 朱一龙</h2>
        <div className="displayflexbetween collectionContent">
          {
            collections.length > 0
              ?
              collections.map((item, index) =>
                <Card hoverable style={{width: 260}} cover={<img alt="example" src={item.img}/>} key={index}>
                  <Meta title={item.name} description={item.role}/>
                  <p style={{marginTop:"15px",fontSize:"12px"}}>{item.desc}</p>
                </Card>
              )
              : ""
          }
        </div>
      </div>
    );
  }
}

