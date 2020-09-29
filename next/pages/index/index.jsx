import React, { Fragment, Component } from 'react';
import Head from 'next/head';
import Page from '@/layout/Common/index';
import './index.less';

class PageIndex extends Component {
  static async getInitialProps({ res }) {
    return res.locals;
  }
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>aaa</title>
          <meta name="keywords" content="bbb" />
          <meta name="description" content="ccc" />
        </Head>

        <Page>
          <div className='page-index'>
            hello~~
          </div>
        </Page>
      </Fragment>
    );
  }
}

export default PageIndex;
