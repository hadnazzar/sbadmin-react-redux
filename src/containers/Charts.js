import React from 'react';

import ContainerCard from '../components/ContainerCard';
import AreaChart from '../components/charts/AreaChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';

const Charts = () => (
  <div>
    <div className='row'>
      <div className='col-md-12'>
        <ContainerCard
          size={3}
          headerText='Area Chart Example'
          icon='area-chart'
          footerText='Updated yesterday at 11:59 PM'
        >
          <AreaChart />
        </ContainerCard>
      </div>
    </div>
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
      </div>
    </div>
  </div>
);

export default Charts;
