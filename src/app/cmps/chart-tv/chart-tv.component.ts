import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { baseColors, } from 'ng2-charts';

@Component({
  selector: 'chart-tv',
  templateUrl: './chart-tv.component.html',
  styleUrls: ['./chart-tv.component.scss']
})

export class ChartTvComponent implements OnInit {
  @Input() tradeVolume :any[] = [];
  xAxis: any[] = [];
  yAxis: any[] = []
  constructor() { }
  ngOnInit(): void {
    console.log('hi from chart-tv');
    console.log(this.tradeVolume);
    if (this.tradeVolume) {
      this.xAxis = this.tradeVolume.map(tv => new Date(tv.x * 1000).toLocaleDateString());
      this.yAxis = this.tradeVolume.map(tv => tv.y);
      this.lineChartLabels = this.xAxis
      this.lineChartData = [{ data: this.yAxis, label: 'Trade Volume' }];
    }
  }

  public lineChartData: any[] = [
    { data: this.yAxis, label: 'Series A' },
  ];
  public lineChartLabels: any[] = this.xAxis;

  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: any[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

}


