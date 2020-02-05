import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  Player = [];
  Run = [];
  // type: string;
  data: any;
  options: any;
  constructor() { }

  @Input("tipo") type : string;

  ngOnInit() {
    console.log(`Esto llego del input: ${this.type}`);
    this.type = this.type === "" || this.type === undefined || this.type === " " ? "bar" : this.type;
    this.data = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      datasets: [
        {
          label: "Arca Continental",
          backgroundColor: "#60f08d" ,
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random()]
        }, {
          label: 'Cemex',
          backgroundColor: "#43e3e8",
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random()]
        },{
          label: 'Neoris',
          backgroundColor: "#21a3e8",
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random()]
        }
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
