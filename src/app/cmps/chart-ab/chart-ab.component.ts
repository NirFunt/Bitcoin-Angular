import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { baseColors, } from 'ng2-charts';

@Component({
  selector: 'chart-ab',
  templateUrl: './chart-ab.component.html',
  styleUrls: ['./chart-ab.component.scss']
})
export class ChartAbComponent implements OnInit {
  @Input() avgBlock :any[] = [];
  xAxis: any[] = [];
  yAxis: any[] = []
  constructor() { }
  ngOnInit(): void {
    console.log('hi from chart-ab');
    this.xAxis = this.avgBlock.map(ab => new Date(ab.x * 1000).toLocaleDateString());
    this.yAxis = this.avgBlock.map(ab => ab.y);
    this.lineChartLabels = this.xAxis
    this.lineChartData = [{ data: this.yAxis, label: 'Average Block' }];
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


