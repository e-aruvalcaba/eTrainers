import { Component, OnInit } from '@angular/core';
import { Data, data } from 'src/app/Data/data';
import { Chart } from 'chart.js';  

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
  Player = [];
  Run = [];
  type: string;
  data: any;
  options: any;
  // barchart = []
  constructor() { }

  ngOnInit() {
    // this.data.map((x) => {
    //   this.Player.push(x.PlayerName);
    //   this.Run.push(x.Run);
    // });

    this.type = 'pie';
    this.data = {
      labels: ['Data 1 ', 'Data 2', 'Data 3'],
      datasets: [{
        data: [300, 500, 100],
        backgroundColor: ["lightblue", "#34ebe8", "#b4a3e6"],
      }],
    };

    this.options = {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: false,
          },
        ],
      },
      legend: {
        labels: {
          fontColor: "black",
        },
      },
    };
  }
  private random() {
    return Math.round(Math.random() * 100);
  }

}// end of the way