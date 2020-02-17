import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _global:GlobalService, private _router: Router) { }

  ngOnInit() {
    if(!this._global.user){
      this._router.navigateByUrl('/')
    }
  }

}
