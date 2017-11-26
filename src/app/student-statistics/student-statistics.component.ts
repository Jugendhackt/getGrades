import { Component, OnInit } from '@angular/core';
import {StudentService} from "../student.service";
declare let $: any;
declare let Chart: any;
@Component({
  selector: 'app-student-statistics',
  templateUrl: './student-statistics.component.html',
  styleUrls: ['./student-statistics.component.scss']
})
export class StudentStatisticsComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    var config = {
      type: 'line',
      data: {
        datasets: [{
          label: "Mathe",
          backgroundColor: '#b71c1c',
          borderColor: '#b71c1c',
          data: [
            {
              y: '1.5',
              x: '1'
            },
            {
              y: '1',
              x: '2'
            },
            {
              y: '2',
              x: '3'
            },
            {
              y: '3',
              x: '4'
            },
            {
              y: '5',
              x: '5'
            },
            {
              y: '4',
              x: '6'
            },
            {
              y: '2',
              x: '7'
            },
            {
              y: '6',
              x: '8'
            },
            {
              y: '4',
              x: '9'
            },
            {
              y: '2',
              x: '10'
            },
            {
              y: '1',
              x: '11'
            },
            {
              y: '6',
              x: '12'
            },
          ],
          fill: false,
        }, {
          label: "Deutsch",
          backgroundColor: '#fbc02d',
          borderColor: '#fbc02d',
          data: [
            {
              y: '7',
              x: '1'
            },
            {
              y: '4',
              x: '2'
            },
            {
              y: '8',
              x: '3'
            },
            {
              y: '6',
              x: '4'
            },
            {
              y: '10',
              x: '5'
            },
            {
              y: '12',
              x: '6'
            },
            {
              y: '15',
              x: '7'
            },
            {
              y: '5',
              x: '8'
            },
            {
              y: '6',
              x: '9'
            },
            {
              y: '7',
              x: '10'
            },
            {
              y: '8',
              x: '11'
            },
            {
              y: '12',
              x: '12'
            },
          ],
          fill: false,
        }, {
          label: "Englisch",
          backgroundColor: '#0d47a1',
          borderColor: '#0d47a1',
          data: [
            {
              y: '7',
              x: '1'
            },
            {
              y: '2',
              x: '2'
            },
            {
              y: '9',
              x: '3'
            },
            {
              y: '10',
              x: '4'
            },
            {
              y: '4',
              x: '5'
            },
            {
              y: '13',
              x: '6'
            },
            {
              y: '0',
              x: '7'
            },
            {
              y: '14',
              x: '8'
            },
            {
              y: '15',
              x: '9'
            },
            {
              y: '6',
              x: '10'
            },
            {
              y: '9',
              x: '11'
            },
            {
              y: '8',
              x: '12'
            },
          ],
          fill: false,
        }]
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Datum'
            }
          }],
          yAxes: [{
            type: 'linear',
            position: 'left',
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Noten'
            }
          }]
        }
      }
    };
    var ctx = $('#statistics');
    var chart = new Chart(ctx, config);
  }

}
