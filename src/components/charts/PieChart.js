import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: ["Blue", "Red", "Yellow", "Green"],
	datasets: [{
		data: [12.21, 15.58, 11.25, 8.32],
		backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
	}],
};

export default class PieChart extends Component {
  render() {
    return (
      <Pie data={data} 
			  height={480}
				width={480} />
    );
  }
};