import React from 'react';

import ContainerCard from '../components/ContainerCard';
import DataTable from '../data/DataTable';
import DataTableExample from '../components/DataTableExample';

const fetchData = () => new DataTable(100).getAll();

const DataTablePage = () => (
  <div className='row'>
    <div className='col-md-12'>
      <ContainerCard
        size={3}
        headerText='Data Table Example'
        icon='table'
        footerText='Updated yesterday at 11:59 PM'
      >
        <DataTableExample data={fetchData()} />
      </ContainerCard>
    </div>
  </div>
);

export default DataTablePage;
