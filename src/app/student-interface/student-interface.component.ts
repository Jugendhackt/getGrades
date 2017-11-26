import {Component, OnInit} from '@angular/core';
import {StudentService} from "../student.service";
import {NgModel} from "@angular/forms";

declare let $: any;

@Component({
  selector: 'app-student-interface',
  templateUrl: './student-interface.component.html',
  styleUrls: ['./student-interface.component.scss']
})
export class StudentInterfaceComponent implements OnInit {
  constructor(private studentService: StudentService) {
  }

  // subjects = (function() {this.studentService.subjects().then((res: any) => {return res.data.subjects});}) ();
  ngOnInit() {
    this.studentService.subjects().then((res: any) => {
      let subjects = res.data.subjects
      for (let subject in subjects) {
        $('#faecher').append('<a class="modal-trigger black-text collection-item" href="#modal-subject">' + subjects[subject] + '</a>')
      }
    });
    $(document).ready(function () {
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
  }
}
