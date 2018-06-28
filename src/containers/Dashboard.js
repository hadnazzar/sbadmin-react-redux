import React, { Component } from 'react';

import ContainerCard from '../components/ContainerCard';
import SbCard from '../components/SbCard';
import AreaChart from '../components/charts/AreaChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import SocialFeed from '../components/SocialFeed';
import FeedExample from '../components/FeedExample';
import DataTableExample from '../components/DataTableExample';

import Feeds from '../data/Feeds';
import DataTable from '../data/DataTable';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: Feeds,
      dataTable: new DataTable(100).getAll(),
    };
  }

  render() {
    if (!this.state.feeds && !this.state.dataTable) {
      return null;
    }
    return (
      <div>
        <div className='row'>
          <div className='col-xl-3 col-sm-6 mb-3'>
            <SbCard
              icon='comments'
              cardTitle='26 New Messages!'
              colorType='primary'
            />
          </div>
          <div className='col-xl-3 col-sm-6 mb-3'>
            <SbCard icon='list' cardTitle='11 New Tasks!' colorType='warning' />
          </div>
          <div className='col-xl-3 col-sm-6 mb-3'>
            <SbCard
              icon='shopping-cart'
              cardTitle='123 New Orders!'
              colorType='success'
            />
          </div>
          <div className='col-xl-3 col-sm-6 mb-3'>
            <SbCard
              icon='support'
              cardTitle='13 New Tickets!'
              colorType='danger'
            />
          </div>
        </div>
        <ContainerCard
          size={3}
          headerText='Area Chart Example'
          icon='area-chart'
          footerText='Updated yesterday at 11:59 PM'
        >
          <AreaChart />
        </ContainerCard>

        <div className='row'>
          <div className='col-lg-8'>
            <ContainerCard
              size={3}
              headerText='Bar Chart Example'
              icon='bar-chart'
              footerText='Updated yesterday at 11:59 PM'
            >
              <BarChart />
            </ContainerCard>
            <div className='mb-0 mt-4'>
              <i className='fa fa-newspaper-o' /> News Feed
            </div>
            <hr className='mt-2' />
            <SocialFeed feeds={this.state.feeds} />
          </div>
          <div className='col-lg-4'>
            <ContainerCard
              size={3}
              headerText='Pie Chart Example'
              icon='pie-chart'
              footerText='Updated yesterday at 11:59 PM'
            >
              <PieChart />
            </ContainerCard>
            <FeedExample />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ContainerCard
              size={3}
              headerText='Data Table Example'
              icon='table'
              footerText='Updated yesterday at 11:59 PM'
            >
              <DataTableExample data={this.state.dataTable} />
            </ContainerCard>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
