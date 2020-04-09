// import { Injectable, PipeTransform } from '@angular/core';

// import { BehaviorSubject, Observable, of, Subject, from } from 'rxjs';

// import { Country } from '../data/country';
// import { COUNTRIES } from '../data/countries';
// import { DecimalPipe } from '@angular/common';
// import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
// import { SortColumn, SortDirection } from '../directives/sortable.directive';
// import { HttpClient } from '@angular/common/http';

// interface SearchResult {
//   countries: Country[];
//   total: number;
// }

// interface State {
//   page: number;
//   pageSize: number;
//   searchTerm: string;
//   sortColumn: SortColumn;
//   sortDirection: SortDirection;
// }

// interface fullUser{
//   Id: number,
//   Username: string
//   ActivityType: string
//   RelatedTo: string
//   Country: string
//   Office: string
//   Department: string
//   Date: string
// }

// const compare = (v1: string, v2: string) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

// function sort(countries: Country[], column: SortColumn, direction: string): Country[] { //fix sort para numeros
//   if (direction === '' || column === '') {
//     return countries;
//   } else {
//     return [...countries].sort((a, b) => {
//       const res = compare(`${a[column]}`, `${b[column]}`);
//       return direction === 'asc' ? res : -res;
//     });
//   }
// }

// function matches(country: Country, term: string, pipe: PipeTransform) {
//   return country.name.toLowerCase().includes(term.toLowerCase())
//     || pipe.transform(country.area).includes(term)
//     || pipe.transform(country.population).includes(term);
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class TableService {
//   private _loading$ = new BehaviorSubject<boolean>(true); // fix este loading con el de nebular
//   private _search$ = new Subject<void>();
//   private _searchFullUser$ = new Subject<void>();
//   private _countries$ = new BehaviorSubject<Country[]>([]);
//   private _fullUsers$ = new Observable<fullUser[]>();
//   private _total$ = new BehaviorSubject<number>(0);
//   private _fullUsersTotal$ = new BehaviorSubject<number>(0);

//   private _state: State = {
//     page: 1,
//     pageSize: 4,
//     searchTerm: '',
//     sortColumn: '',
//     sortDirection: ''
//   };

//   private _fullState: State = {
//     page: 1,
//     pageSize: 4,
//     searchTerm: '',
//     sortColumn: '',
//     sortDirection: ''
//   };

  

//   constructor(private pipe: DecimalPipe, private _http: HttpClient) {
//     this._search$.pipe( //analizar mas esta parte que no la entiendo bien
//       tap(() => this._loading$.next(true)),
//       debounceTime(200),
//       switchMap(() => this._search()),
//       delay(200),
//       tap(() => this._loading$.next(false))
//     ).subscribe(result => {
//       this._countries$.next(result.countries);
//       this._total$.next(result.total);
//     });

//     this._search$.next();
//   }

//   get countries$() { return this._countries$.asObservable(); }
//   get total$() { return this._total$.asObservable(); }
//   get loading$() { return this._loading$.asObservable(); }
//   get page() { return this._state.page; }
//   get pageSize() { return this._state.pageSize; }
//   get searchTerm() { return this._state.searchTerm; }
  
//   set page(page: number) { this._set({ page }); }
//   set pageSize(pageSize: number) { this._set({ pageSize }); }
//   set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
//   set sortColumn(sortColumn: SortColumn) { this._set({ sortColumn }); }
//   set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }


//   get fullUsers$() { return this._fullUsers$ }
//   get fullUsersTotal$() { return this._fullUsersTotal$.asObservable(); }
//   get fullUsersPage() { return this._fullState.page; }
//   get fullUsersPageSize() { return this._fullState.pageSize; }
//   get fullUsersSearchTerm() { return this._fullState.searchTerm; }

//   set fullUserPage(page: number) { this._setFullUser({ page }); }
//   set fullUserPageSize(pageSize: number) { this._setFullUser({ pageSize }); }
//   set fullUserSearchTerm(searchTerm: string) { this._setFullUser({ searchTerm }); }
//   set fullUserSortColumn(sortColumn: SortColumn) { this._setFullUser({ sortColumn }); }
//   set fullUserSortDirection(sortDirection: SortDirection) { this._setFullUser({ sortDirection }); }

//   private _set(patch: Partial<State>) {
//     Object.assign(this._state, patch);
//     this._search$.next();
//   }
//   private _setFullUser(patch: Partial<State>) {
//     Object.assign(this._fullState, patch);
//     this._searchFullUser$.next();
//   }



//   private _search(): Observable<SearchResult> {
//     const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

//     //obtener desde el backend

//     // 1. sort
//     let countries = sort(COUNTRIES, sortColumn, sortDirection);

//     // 2. filter
//     countries = countries.filter(country => matches(country, searchTerm, this.pipe));
//     const total = countries.length;

//     // 3. paginate
//     countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
//     return of({ countries, total });
//   }

//   private _searchFullUser(): Observable<SearchResult> {
//     const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._fullState;

//     //obtener desde el backend
//     let array: fullUser[] = []; 
//     // this._fullUsers$ = this._http.get<Observable<fullUser>>("http://localhost:53258/api/AllRecords");
//     (this._fullUsers$ = this._http.get<fullUser[]>("http://localhost:53258/api/AllRecords")).subscribe(res => {
//       array = res;
//     });

//     // 1. sort

//     // let countries = sort(array, sortColumn, sortDirection);

//     // let countries = sort(COUNTRIES, sortColumn, sortDirection);
//     // 2. filter
//     countries = countries.filter(country => matches(country, searchTerm, this.pipe));
//     const total = countries.length;

//     // 3. paginate
//     countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
//     return of({ countries, total });
//   }
// }
