import { Component, OnInit } from '@angular/core';
declare let $: any
@Component({
  selector: 'app-student-interface',
  templateUrl: './student-interface.component.html',
  styleUrls: ['./student-interface.component.scss']
})
export class StudentInterfaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  }

}
