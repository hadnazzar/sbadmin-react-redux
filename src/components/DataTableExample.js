import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const DataTableExample = ({ data }) => (
  <ReactTable
    data={data}
    columns={[
      {
        Header: '#',
        accessor: 'id',
        width: 50,
      },
      {
        Header: 'Name',
        accessor: 'name',
        width: 200,
      },
      {
        Header: 'Position',
        accessor: 'position',
        width: 300,
      },
      {
        Header: 'Office',
        accessor: 'office',
        width: 200,
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Start date',
        accessor: 'start_date',
      },
      {
        Header: 'Salary',
        accessor: 'salary',
      },
    ]}
    defaultPageSize={10}
    className='-striped -highlight'
    showPaginationBottom
    style={{
      height: '500px', // This will force the table body to overflow and scroll, since there is not enough room
    }}
  />
);

export default DataTableExample;
