import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/Usuario';
import { error } from 'protractor';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
export class login {
  email: string
  password: string
}

const baseUrl = "http://localhost:53258/api/"

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _currentUser: any = null;

  constructor(private _http: HttpClient) { }

  // user operations

  public get user(): any {
    return this._currentUser;
  }
  public set user(v: any) {
    this._currentUser = v;
  }



  // http operations
  getAllUsers() {
    // return this._http.get('http://localhost:53258/api/Test');
    return this._http.get('http://localhost:58958/api/Test');
    
  }
  getSearch(searchText:string) {
    // return this._http.get('http://localhost:53258/api/Test');
    return this._http.get('http://localhost:58958/api/test?searchText=' + searchText);
    
  }
  getUserbyId(id: number) {
    return this._http.get('http://localhost:53258/api/Test/' + id);
  }
  postUser(user: User) {
    return this._http.post<User>('http://localhost:53258/api/Test', user);
  }

  login() {
    let login: login = {
      email: "maricela.rmz@neoris.com",
      password: "Neoris_2020."
    }
    return this._http.post<login>('http://localhost:53258/api/login/authenticate', login).subscribe((resp) => {
      if (resp) {
        localStorage.setItem("tokens", JSON.stringify(resp))
      }
    }, (error) => {
      console.warn(error)
    }, () => { });;
  }

  
  
  search(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.getAllUsers();
  }

  // return this._http.post<User>('http://localhost:53258/api/Test', user)
  // .pipe(
  //   catchError(this.handleError('addHero', hero))
  // );
  // return this._http.post<Train>('http://40.76.70.76:80/TrainTracking/api/Train/', train);

  // postTrain(train: Train) {
  //   return this._http.post<Train>('http://40.76.70.76:80/TrainTracking/api/Train/', train);
  // }
  // postTrain(train: Train) {
  //   return this._http.post<Train>('http://40.76.70.76:80/TrainTracking/api/Train/', train);
  // }


  isLoggedIn() {
    return this._http.get(`${baseUrl}login/echouser`, this.authOptions()).subscribe((resp) => {
      debugger
      let resps = resp;
      if (resps === undefined || resps === null || !resps) {
        localStorage.clear();
      }
    }, (error) => {
      console.warn(error)
    }, () => { });
  }

  private authOptions(): any {
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('tokens')).token}`,
      }) // end headers
    }; // end options
  } // end authOptions



}
