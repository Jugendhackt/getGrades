import { Injectable } from '@angular/core';
import axios from 'axios';
import {environment} from "../environments/environment";


@Injectable()
export class AdminService {

  constructor() {}
  public newUser(email: String, password: String, name: String, group: String) {
    return new Promise((resolve, reject) => {
      axios.get(environment.apiServer + '/newuser', {
        params: {
          email: email,
          password: password,
          name: name,
          groupId: group
        }
      }).then((response) => {
        resolve(response)
      }).catch((e) => {
        reject(e)
      })
    })
  }
}
