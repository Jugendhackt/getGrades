import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
declare let $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email: String;
  private password: String;
  private accounttype: any;
  constructor(private router: Router) {
  }

  ngOnInit() {
    $(document).ready(function() {
      $('select').material_select();
    });
  }
  login() {
    //TODO: axios req
  }

}
