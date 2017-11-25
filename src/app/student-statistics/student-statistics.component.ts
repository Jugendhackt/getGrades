import { Component, OnInit } from '@angular/core';
declare let $: any;
declare let Chart: any;
@Component({
  selector: 'app-student-statistics',
  templateUrl: './student-statistics.component.html',
  styleUrls: ['./student-statistics.component.scss']
})
export class StudentStatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var config = {
      type: 'line',
      data: {
        datasets: [{
          label: "Mathe",
          backgroundColor: '#000',
          borderColor: '#000',
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
