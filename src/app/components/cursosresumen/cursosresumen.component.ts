import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

export interface curso {
  name: string,
  company: string,
  date: Date,
  tech: string
};

@Component({
  selector: 'app-cursosresumen',
  templateUrl: './cursosresumen.component.html',
  styleUrls: ['./cursosresumen.component.css']
})

export class CursosresumenComponent implements OnInit {

  localLocale: any;


  constructor() {
  }

  cursos: curso[] = [{
    name: "Seguridad: IPERC",
    company: "Arca Continental",
    date: new Date(2020, 1, 15),
    tech: "Adobe Flash CSS4 Pro"
  }, {
    name: "IMCR Overview",
    company: "Arca Continental",
    date: new Date(),
    tech: "HTML5 Canvas"
  }, {
    name: "Modelo Operativo",
    company: "Arca Continental",
    date: new Date(),
    tech: "Adobe Flash CSS4 Pro"
  }, {
    name: "Cemex Commercial Academy Foundations",
    company: "Cemex",
    date: new Date(),
    tech: "HTML5, Javascript, CSS3"
  }, {
    name: "KORE 180",
    company: "Arca Continental",
    date: new Date(),
    tech: "HTML5 Canvas"
  }, {
    name: "KORE 250",
    company: "Arca Continental",
    date: new Date(),
    tech: "HTML5 Canvas"
  }, {
    name: "PIVO",
    company: "Arca Continental",
    date: new Date(),
    tech: "Adobe Flash CSS4 Pro"
  }, {
    name: "Seguridad: Trabajo en las alturas",
    company: "Arca Continental",
    date: new Date(),
    tech: "Adobe Flash CSS4 Pro"
  }, {
    name: "Seguridad: Montacargas",
    company: "Arca Continental",
    date: new Date(),
    tech: "Adobe Flash CSS4 Pro"
  }, {
    name: "Movil de ventas",
    company: "Arca Continental",
    date: new Date(),
    tech: "Adobe Flash CSS4 Pro"
  }, {
    name: "ICE 2019",
    company: "Arca Continental",
    date: new Date(),
    tech: "Adobe Flash CSS4 Pro"
  }, {
    name: "CEMEX: CPM",
    company: "CEMEX",
    date: new Date(),
    tech: "Adobe Flash CSS4 Pro"
  }, {
    name: "Grupo Mexico SalesForce",
    company: "Grupo Mexico",
    date: new Date(),
    tech: "Adobe Flash CSS5 Action Script 3"
  }, {
    name: "Introduccion a SSFF",
    company: "Pilgrims de Mexico",
    date: new Date(),
    tech: "Adobe Flash CSS4 Pro"
  }, {
    name: "PIVO 2",
    company: "Arca Continental",
    date: new Date(2020, 1, 15),
    tech: "Adobe Flash CSS4 Pro"
  }
  ];

  ngOnInit() {
  }

}
