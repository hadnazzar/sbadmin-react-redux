import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBreadcrumb from '../components/PageBreadcrumb';
import RootRoutes from '../routes';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='content-wrapper'>
          <div className='container-fluid'>
            <PageBreadcrumb />
            <RootRoutes />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
