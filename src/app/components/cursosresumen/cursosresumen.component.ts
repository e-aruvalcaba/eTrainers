import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { ExcelService } from 'src/app/services/excel.service';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { PdfService } from 'src/app/services/pdf.service';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

export interface curso {
  name: string,
  company: string,
  date: Date,
  tech: string
};

export class cursoResumen {
  id: number
  nombre: string
  compania: string
  fecha: string
  tecnologia: string
}

@Component({
  selector: 'app-cursosresumen',
  templateUrl: './cursosresumen.component.html',
  styleUrls: ['./cursosresumen.component.css']
})

export class CursosresumenComponent implements OnInit {

  localLocale: any;
  fileName = "test.xlsx";
  data: cursoResumen[] = [];
  @ViewChild("tablaCursos", { static: false }) tabla: ElementRef;

  constructor(private _excelService: ExcelService, private _pdf: PdfService) {

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

  exportarExcel() : void {
    this._excelService.exportExcel(this.cursos, "resumen_cursos");
  }

  exportarPDF(){
    this._pdf.exportAsPDF(this.tabla, "resumen_cursos")
  }
}// end of the way
