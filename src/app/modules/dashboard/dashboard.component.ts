import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/chart/weather.service';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {




  chart = []; // This will hold our chart info

  constructor(private _weather: WeatherService) {}

  ngOnInit() {
    this._weather.dailyForecast()
      .subscribe(res => {
        console.log(res);
        let temp_max = res['list'].map(res => res.temp.max);
        let temp_min = res['list'].map(res => res.temp.min);
        let alldates = res['list'].map(res => res.dt)

        let weatherDates = []
        alldates.forEach((res) => {
          this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              labels: weatherDates,
              datasets: [
                {
                  data: temp_max,
                  borderColor: "#EC4689",
                  fill: false
                },
                {
                  data: temp_min,
                  borderColor: "#508FDA",
                  fill: false
                },
              ]
            },
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  display: true
                }],
                yAxes: [{
                  display: true
                }],
              }
            }
          });
            let jsdate = new Date(res * 1000)
            weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        })
      })
  }


}
