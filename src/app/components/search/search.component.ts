import { OnInit, Component, ViewChild } from '@angular/core';
import { NgbDropdown, NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';
import { Observable, throwError } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public model: any;
  icono: string = "person";
  currentSearch: number = 0;
  searching = false;
  searchFailed = false;

  @ViewChild('ddown', { static: true }) ddown: NgbDropdown;

  constructor(config: NgbTypeaheadConfig,
    private _http: HttpClient,
    private _global: GlobalService,
    private _router: Router) {
    config.showHint = false;

  }

  ngOnInit() {

  }

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      // switchMap allows returning an observable rather than maps array
      switchMap((searchText) => this._global.getSearch(searchText)),
      catchError(error => {
        if (error.status === 401 || error.status === 403) {
          // FIX handle error
        }
        return throwError(error);
      }));
  }

  /**
 * Used to format the result data from the lookup into the
 * display and list values. Maps `{name: "band", id:"id" }` into a string
*/
  resultFormatBandListValue(value: any) {
    return value.name;
  }
  /**
    * Initially binds the string value and then after selecting
    * an item by checking either for string or key/value object.
  */
  inputFormatBandListValue(value: any) {
    if (value.name)
      return value.name
    return value;
  }

  /**
   * Manage the selected item from the list of searchinput
   * 
   */
  getSelection(event) {
    // console.log(event.item);
    // console.log(event.item.id)
    // console.log(event.item.type)
    // console.log(event.item.name)
    // console.log(event.item.email)

    this._router.navigate(['/user-profile'], { queryParams: { id: event.item.id } });
  }

  keyUp($event) {
    if ($event.key == 'Enter') {
      // alert("Enter")
      this._router.navigate(['/search-results'], { queryParams: { term: this.model } });
    }
  }

  openDropDown() {

    return
    // this.ddown.open(); //---FOR MVP 2
  }

  getDDSelection(value: any) {
    
    switch (value) {
      case 0:
        this.icono = "person";
        break;
      case 1:
        this.icono = "globe";
        break;
      case 2:
        this.icono = "home";
        break;
      default:
        break;
    }

    this.currentSearch = value;
  }

  searchForUsers(){

    if(this.model === "" || this.model===null || this.model===undefined)
      return

    this._router.navigate(['/search-results'], { queryParams: { term: this.model } });
  }

}// end of the way





// import { Component, OnInit, ViewChild } from '@angular/core';
// import { NgbTypeaheadConfig, NgbDropdownMenu, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
// import { Observable, from } from 'rxjs';
// import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';
// import { GlobalService } from 'src/app/services/global.service';

// const searchResults: { name: string, flag: string }[] = [
//   { 'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
//   { 'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' },
//   { 'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png' },
//   { 'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png' },
//   { 'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png' },
//   { 'name': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png' },
//   { 'name': 'Connecticut', 'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png' },
//   { 'name': 'Delaware', 'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png' },
//   { 'name': 'Florida', 'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png' },
//   {
//     'name': 'Georgia',
//     'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
//   },
//   { 'name': 'Hawaii', 'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' },
//   { 'name': 'Idaho', 'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
//   { 'name': 'Illinois', 'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png' },
//   { 'name': 'Indiana', 'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png' },
//   { 'name': 'Iowa', 'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
//   { 'name': 'Kansas', 'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png' },
//   { 'name': 'Kentucky', 'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png' },
//   { 'name': 'Louisiana', 'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png' },
//   { 'name': 'Maine', 'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
//   { 'name': 'Maryland', 'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png' },
//   { 'name': 'Massachusetts', 'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png' },
//   { 'name': 'Michigan', 'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png' },
//   { 'name': 'Minnesota', 'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png' },
//   { 'name': 'Mississippi', 'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png' },
//   { 'name': 'Missouri', 'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png' },
//   { 'name': 'Montana', 'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png' },
//   { 'name': 'Nebraska', 'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png' },
//   { 'name': 'Nevada', 'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png' },
//   { 'name': 'New Hampshire', 'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png' },
//   { 'name': 'New Jersey', 'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png' },
//   { 'name': 'New Mexico', 'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png' },
//   { 'name': 'New York', 'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png' },
//   { 'name': 'North Carolina', 'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png' },
//   { 'name': 'North Dakota', 'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png' },
//   { 'name': 'Ohio', 'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
//   { 'name': 'Oklahoma', 'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png' },
//   { 'name': 'Oregon', 'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png' },
//   { 'name': 'Pennsylvania', 'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png' },
//   { 'name': 'Rhode Island', 'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png' },
//   { 'name': 'South Carolina', 'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png' },
//   { 'name': 'South Dakota', 'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png' },
//   { 'name': 'Tennessee', 'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png' },
//   { 'name': 'Texas', 'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' },
//   { 'name': 'Utah', 'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png' },
//   { 'name': 'Vermont', 'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png' },
//   { 'name': 'Virginia', 'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png' },
//   { 'name': 'Washington', 'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png' },
//   { 'name': 'West Virginia', 'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png' },
//   { 'name': 'Wisconsin', 'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png' },
//   { 'name': 'Wyoming', 'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png' },
//   { 'name': 'Man Southerland', 'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png' }
// ];

// export interface ISearchResults {
//   type: string
//   name: string
//   id: number
//   email: string
// }

// const usersSearchResults: ISearchResults[] = [];
// const officesSearchResults: ISearchResults[] = [];
// const locationSearchResults: ISearchResults[] = [];
// const teamsSearchResults: ISearchResults[] = [];


// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.scss']
// })
// export class SearchComponent implements OnInit {

//   public model: any;
//   icono: string = "person";
//   currentSearch: number = 0;
//   searchResults: ISearchResults[] = [];

//   searching = false;
//   searchFailed = false;

//   @ViewChild('ddown', { static: true }) ddown: NgbDropdown;

//   constructor(config: NgbTypeaheadConfig,
//     private _http: HttpClient,
//     private _global: GlobalService) {
//     // customize default values of typeaheads used by this component tree
//     config.showHint = false;

//   }

//   ngOnInit() {

//   }

//   search = (text$: Observable<string>) =>
//   text$.pipe( //from(promise).pipe(
//      debounceTime(200),
//      map(term => term === '' ? []
//      : this.searchResults.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));


//   getSearch(term:string) {


//     // return (text$: Observable<ISearchResults>) =>
//     // text$.pipe( //from(promise).pipe(
//     //    debounceTime(200),
//     //    map(term => term.name === '' ? []
//     //    : this.searchResults.filter(v => v.name.toLowerCase().indexOf(term.name.toLowerCase()) > -1).slice(0, 10)));


//     return (text$: Observable<string>) =>
//     text$.pipe( //from(promise).pipe(
//        debounceTime(200),
//        map(term => term === '' ? []
//        : this.searchResults.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));

//         // return (text$: Observable<string>) =>
//         //  text$.pipe( //from(promise).pipe(
//         //     debounceTime(200),
//         //     map(term => term === '' ? []
//         //     : this.searchResults.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));
//   }

//   onKeyup(){
//     switch (this.currentSearch) {
//       case 0:

//         let promise = new Promise<Observable<ISearchResults>>((resolve, reject) => {
//           this._global.getAllUsers()
//             .toPromise()
//             .then(
//               res => { // Success
//                 console.log(res);
//                 let resp:any = res;
//                 this.searchResults = resp;
//                 resolve();
//               }
//             );
//         });


//         // console.log(from(promise).pipe( //from(promise).pipe(
//         //   debounceTime(200),
//         //   map(term => this.model === '' ? []
//         //   : this.searchResults.filter(v => v.name.toLowerCase().indexOf(this.model.toLowerCase()) > -1).slice(0, 10))))
//         break;

//       default:
//         break;
//     }
//   }

//   // search(term:string) {

//   //   return promise;
//   // }





//   formatter = (x: { name: string }) => x.name;


//   openDropDown() {
//     this.ddown.open();
//   }

//   getSelection(value: any) {
//     switch (value) {
//       case '0':
//         this.icono = "person";
//         break;
//       case '1':
//         this.icono = "globe";
//         break;
//       case '2':
//         this.icono = "home";
//         break;
//       default:
//         break;
//     }

//     this.currentSearch = value;
//   }

// }
