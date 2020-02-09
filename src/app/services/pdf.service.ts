import { Injectable, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor() { }
  exportAsPDF(table:ElementRef, fileName:string):void{
    let data = table.nativeElement; // document.getElementById('MyDIv');  
    let PDF_EXTENSION:string = ".pdf";
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('l', 'cm', 'a4'); // Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); // Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
      pdf.save(`${fileName}_eTrainers_export${ new Date().getTime()}${PDF_EXTENSION}`);   
    }); 
  }
}
