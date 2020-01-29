import { Component, OnInit } from '@angular/core';

import { Chart as chartjs } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data, data } from '../../Data/data';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  // data:Data[] = data;
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

    this.type = 'horizontalBar';
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Dataset 1",
          backgroundColor: "#60f08d" ,
          data: [65, 59, 80, 81, 56, 55, 20]
        }, {
          label: 'Dataset 2',
          backgroundColor: "#43e3e8",
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
        },
      ]
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: true
    };
  }
  private random() {
    return Math.round(Math.random() * 100);
  }

}// end of the way
