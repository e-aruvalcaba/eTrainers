import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/Usuario';
export class login{
  email: string
  password: string  
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _currentUser : any = null; 

  constructor(private _http: HttpClient) { }

  // user operations
  
  public get user() : any {
    return this._currentUser;
  }  
  public set user(v : any) {
    this._currentUser = v;
  }
  

  // http operations
  getAllUsers() {
    return this._http.get('http://localhost:53258/api/Test');
  }
  getUserbyId(id: number) {
    return this._http.get('http://localhost:53258/api/Test/' + id);
  }
  postUser(user: User) {
    return this._http.post<User>('http://localhost:53258/api/Test', user);
  }

  login(){
    let login:login = {
      email: "maricela.rmz@neoris.com",
      password: "Neoris_2020."
    }
    return this._http.post<login>('http://localhost:53258/api/login/authenticate', login);
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

}
