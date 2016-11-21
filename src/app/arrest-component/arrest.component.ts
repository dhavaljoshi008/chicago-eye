import { Component, OnChanges, Input } from '@angular/core';

import { ArrestCount } from '../crime-record/arrest-count';

@Component({
    selector: 'arrest',
    templateUrl: './arrest.component.html',
    styleUrls: ['./arrest.component.css']
})

export class ArrestComponent implements OnChanges {
    
  @Input() arrestCount: ArrestCount;  

    barChartOptions:any;
    barChartLabels:string[];
    barChartType:string;
    barChartLegend:boolean;
    barChartData:any[];
  
  constructor() {
    this.barChartOptions = { scaleShowVerticalLines: false, responsive: true };
    this.barChartLabels = [];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartData = [{data: [], label: 'Arrest'}];
  }

  ngOnChanges() { 
    let labels: string[] = [];
    let dataValues: number[]  = [];
    // Check whether arrestCount has been initialized
    if(this.arrestCount !== undefined) {
        console.log(this.arrestCount);
        for(let crime in this.arrestCount) {
            if(this.arrestCount.hasOwnProperty(crime)) {
                labels.push(''+crime);
                dataValues.push(this.arrestCount[crime]);
            }
        }
    this.barChartData = [{data: dataValues, label: 'Arrest'}];
    this.barChartLabels = labels;
    }
  }
  
  printArrest() {
      console.log(this.arrestCount);
  }

  // Chart clicked.
  public chartClicked(e:any):void {
    console.log(e);
  }

  // Chart Hovered.
  public chartHovered(e:any):void {
    console.log(e);
  }


}