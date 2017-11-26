import { Injectable } from '@angular/core';
import axios from 'axios';
import {environment} from "../environments/environment";

@Injectable()
export class StudentService {
  constructor() { }
  public subjects() {
    return new Promise((resolve, reject) => {
      axios.get(environment.apiServer + '/getsubjects').then((response) => {
        resolve(response)
      }).catch((e) => {
        reject(e)
      })
    })
  }
  public statistics() {
    return new Promise((resolve, reject) => {
      axios.get(environment.apiServer + '/getgrades?studentId=1').then((response) => {
        resolve(response);
      }).catch((e) => {
        reject(e);
      })
    })
  }

}
