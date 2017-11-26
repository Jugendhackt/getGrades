import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
declare let $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private email: String;
  private password: String;
  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    if(localStorage.getItem('isAuthenticated') === 'true') {
      this.router.navigate(['start'])
    }
    $(document).ready(function() {
      $('select').material_select();
    });
  }
  login() {
    this.userService.login(this.email, this.password).then((res: any) => {
      localStorage.setItem('group', res.data.groupId);
      localStorage.setItem('isAuthenticated', "true");
      if(res.data.groupId === '0') {
        this.router.navigate(['admin'])
      } else {
        this.router.navigate(['student'])
      }

    }).catch((e) => {
      console.error(e);
    })
  }

}
