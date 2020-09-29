import React, { Fragment, PureComponent } from 'react';
import Head from 'next/head';
import CommonHeader from '@/component/common/CommonHeader/index.jsx';
import CommonFooter from '@/component/common/CommonFooter/index.jsx';
import CommonSide from '@/component/common/CommonSide/index.jsx';
import './index.less';

class Layout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <Head>
          <meta key="viewport" name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"></meta>
          <meta charSet="utf-8" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/static/images/favicon.ico"
          />
        </Head>

        {/* 页面内容 */}
        <div className="app__innerpage">{children}</div>

      </Fragment>
    );
  }
}

export default Layout;
