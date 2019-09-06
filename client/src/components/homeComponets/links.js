import React, {Component} from 'react';
import {Icon} from 'antd';
import axios from "axios";
import Config from "../../js/config";

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links:[],
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
        query: `query{links{_id desc code link author name meta{createdAt updatedAt }}}`
      }
    }).then((res) => {
      if (res.statusText === "OK") {
        let result = res.data.data;
        this.setState({
          links:result["links"]
        });
      }
    });
  };

  render() {
    let {links} = this.state;
    return (
      <div className="linkContent">
        <h2>真爱粉 * 作品链接</h2>
        <ul>
          {
            links.length > 0
              ?
              links.map((item, index) =>
                <li key={index}>{index + 1}. {item.desc} {item.code ? <span>提取码:{item.code}</span> : ""} <a
                  href={item.link}><Icon type="link"/>网页链接</a> {item.author ?
                  <a href={item.author}>{item.name}</a> : ""}</li>
              )
              : ""
          }
        </ul>
      </div>
    );
  }
}

