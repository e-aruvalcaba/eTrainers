import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {



  constructor() { }

  // exportExcel(table: HTMLTableElement): void {

  //   try {
  //     debugger

  //     /* table id is passed over here */
  //     let element = table; //document.getElementById('excel-table');
  //     const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

  //     /* generate workbook and add the worksheet */
  //     const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //     /* save to file */
  //     XLSX.writeFile(wb, this.fileName);

  //   } catch (error) {
  //     console.error("Error generating excel file: "+error);
  //   }

  // }

  public exportExcel(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })

    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'EXCEL_TYPE' });

    FileSaver.saveAs(data, fileName + '_eTrainers_download' + new Date().getTime() + EXCEL_EXTENSION);
  }

}
