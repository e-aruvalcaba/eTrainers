import { OnInit, Component, ViewChild } from '@angular/core';
import { NgbDropdown, NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
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
   * display and list values. Maps `{name: "username", id:"user id", email: "user email", type: "user, team, etc" }` into a string
  */
  resultFormatValue(value: any) {
    return value.name;
  }
  /**
    * Initially binds the string value and then after selecting
    * an item by checking either for string or key/value object.
  */
  inputFormatValue(value: any) {
    if (value.name)
      return value.name
    return value;
  }

  /**
   * Manage the selected item from the list of searchinput
   * 
   */
  getSelection(event) {
    this._router.navigate(['/user-profile'], { queryParams: { id: event.item.id } });
    setTimeout(() => {
      this.model = "";      
    }, 100);
  }

  keyUp($event) {
    if ($event.key == 'Enter') {
      this._router.navigate(['/search-results'], { queryParams: { term: this.model } });
      this.model = "";
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
    this.model = "";
  }

}// end of the way