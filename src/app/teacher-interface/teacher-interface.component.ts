import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-teacher-interface',
  templateUrl: './teacher-interface.component.html',
  styleUrls: ['./teacher-interface.component.css']
})
export class TeacherInterfaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('select').material_select();
    });
  }

}
