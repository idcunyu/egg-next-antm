import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import './index.less';

class CommonHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBack: false,
    };
  }
  componentDidMount() {
    // 上一页链接存在，则有返回按钮
    if (document.referrer) {
      this.setState({
        isBack: true,
      })
    }
  }

  back() {
    window.history.back(-1);
  }

  render() {
    const { title='' } = this.props;
    const { isBack } = this.state;
    return (
      <div className="app-header">
        
      </div>
    );
  }
}

export default CommonHeader;
