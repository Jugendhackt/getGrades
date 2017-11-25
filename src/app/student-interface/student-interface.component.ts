import { Component, OnInit } from '@angular/core';
import {StudentService} from "../student.service";
import {NgModel} from "@angular/forms";
declare let $: any;

@Component({
  selector: 'app-student-interface',
  templateUrl: './student-interface.component.html',
  styleUrls: ['./student-interface.component.scss']
})
export class StudentInterfaceComponent implements OnInit {
  subjects = this.req_subject();
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    console.log(this.subjects)
	  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  }
  public req_subject(): any {
    this.studentService.subjects().then((res: any) => {
      console.log(res.data.subjects);
      return res.data.subjects;
    })
  }

}
