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
  subjects = this.studentService.subjects().then((res: any) => {
    return res.data.subjects;
  });
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    console.log(this.subjects)
	  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  }
}
