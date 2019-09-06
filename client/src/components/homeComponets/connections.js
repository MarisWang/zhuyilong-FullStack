import React, {Component} from 'react';
import axios from "axios";
import Config from "../../js/config";

export default class ConnectionsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connections: [],
    };
  }
  componentDidMount() {
    this.fetchLink();
  }

  fetchLink = () => {
    axios({
      method: 'POST',
      url: `${Config.uri}graphql`,
      header: {contentType: "application/json",},
      data: {
        query: `query{ connections{_id name link}}`
      }
    }).then((res) => {
      if (res.statusText === "OK") {
        let result = res.data.data;
        this.setState({
          connections:result["connections"]
        });
      }
    });
  };
  render() {
  let {connections}=this.state;
    return (
      <div className="connectionsContent">
        <h2>真爱粉 * 公共社交连接</h2>
        {
          connections.length > 0
            ?
            connections.map((item,index) =>
              <a href={item.link} target="_blank" key={index} style={{display:"block"}} rel="noopener noreferrer">{item.name}</a>
            )
            : ""
        }
      </div>
    );
  }
}

