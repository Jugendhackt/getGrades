import { Injectable } from '@angular/core';
import axios from 'axios';
import {environment} from "../environments/environment";

declare let sha512: any;

@Injectable()
export class UserService {
  constructor() { }
  public login(email: String, password: String) {
    let hashedpwd = sha512(password);
    return new Promise((resolve, reject) => {
      axios.get(environment.apiServer + '/login', {
        params: {
          username: email,
          password: hashedpwd,
        }
      }).then((response) => {
        resolve(response)
      }).catch((e) => {
        reject(e)
      })
    })
  }

}
