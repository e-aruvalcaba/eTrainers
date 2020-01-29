import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { Data, data } from '../../Data/data';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
  Player = [];
  Run = [];
  type: string="line";
  data: any;
  options: any;

  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: "#60f08d",
        borderColor: "black",
      }, {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: "#43e3e8",
        borderColor: "red",
      }, {
        data: [18, 48, 77, 9, 100, 27, 40],
        label: 'Series C',
        backgroundColor: "#34ebe8",
        borderColor: "lightblue",
      },
      ],
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: true,
              color: "black",
            },
            ticks: {
              fontColor: "black",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "red",
            },
            ticks: {
              fontColor: "red",
            },
          },
        ],
      },
      legend: {
        labels: {
          fontColor: "black",
        },
      },
    };
  }// end of NGinit

}// end of the way