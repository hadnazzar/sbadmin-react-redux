import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
    }
  ]
};

const options = {
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      time: {
        unit: 'month'
      },
      gridLines: {
        display: false
      },
      ticks: {
        maxTicksLimit: 6
      }
    }],
    yAxes: [{
      ticks: {
        min: 0,
        max: 15000,
        maxTicksLimit: 5
      },
      gridLines: {
        display: true
      }
    }],
  },
  legend: {
    display: false
  }
}

export default class BarChart extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <Bar
            data={data}
            options={options}
          />
        </div>
        <div className="col-sm-4 text-center my-auto">
          <div className="h4 mb-0 text-primary">$34,693</div>
          <div className="small text-muted">YTD Revenue</div>
          <hr />
          <div className="h4 mb-0 text-warning">$18,474</div>
          <div className="small text-muted">YTD Expenses</div>
          <hr />
          <div className="h4 mb-0 text-success">$16,219</div>
          <div className="small text-muted">YTD Margin</div>
        </div>
      </div>
    );
  }
};