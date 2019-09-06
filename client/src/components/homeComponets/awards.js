import React, {Component} from 'react';
import {Timeline} from 'antd';
import axios from "axios";
import Config from "../../js/config";

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      awards: [],
    }
  }

  componentDidMount() {
    this.fetchAwards();
  }

  fetchAwards = () => {
    axios({
      method: 'POST',
      url: `${Config.uri}graphql`,
      header: {contentType: "application/json",},
      data: {
        query: `query{
                    awards{_id time award}
              }`
      }
    }).then((res) => {
      if (res.statusText === "OK") {
        let result = res.data.data;
        this.setState({
          awards:result["awards"]
        });
      }
    });
  };
  render ()  {
    let {awards}=this.state;
    return (
      <div className="awardContent">
        <h2>Awards 朱一龙</h2>
        <div className="displayflexcenter">
          <Timeline mode="alternate">
            {
              awards.length > 0
                ?
                awards.map((item, index) =>
                  <Timeline.Item color="green" key={index}>{item.time} : {item.award}</Timeline.Item>
                )
                : ""
            }
          </Timeline>
        </div>
      </div>
    );
  }
}

