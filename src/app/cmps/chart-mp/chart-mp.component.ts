import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { baseColors, } from 'ng2-charts';

@Component({
  selector: 'chart-mp',
  templateUrl: './chart-mp.component.html',
  styleUrls: ['./chart-mp.component.scss']
})
export class ChartMpComponent implements OnInit {
  @Input() marketPrice :any[] = [];
  xAxis: any[] = [];
  yAxis: any[] = []
  constructor() { }
  ngOnInit(): void {
    console.log('hi from chart-mp');
      this.xAxis = this.marketPrice.map(mp => new Date(mp.x * 1000).toLocaleDateString());
      this.yAxis = this.marketPrice.map(mp => mp.y);
      this.lineChartLabels = this.xAxis
      this.lineChartData = [{ data: this.yAxis, label: 'Price Market' }];
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


