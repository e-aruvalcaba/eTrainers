import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {

    this.type = 'pie';
    this.data = {
      labels: ['Arca Continental ', 'CDI', 'Neoris'],
      datasets: [{
        data: [300, 500, 200],
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