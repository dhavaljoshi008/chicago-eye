import { Component, Input, OnChanges } from '@angular/core';

import { CrimeTypeCount } from '../crime-record/crime-type-count';

@Component({
    selector: 'crime-types',
    templateUrl: './crime-types.component.html',
    styleUrls: ['./crime-types.component.css']
})

export class CrimeTypesComponent implements OnChanges {

    @Input() crimeTypeCount: CrimeTypeCount;

    doughnutChartLabels:string[];
    doughnutChartData:number[];
    doughnutChartType:string;
    

    constructor() {
      this.doughnutChartLabels = [];
      this.doughnutChartData = [];
      this.doughnutChartType = 'doughnut';
    }

    ngOnChanges() {
        let labels: string[] = [];
        let dataValues: number[]  = [];
        // Check whether crimeTypeCount has been initialized
        if(this.crimeTypeCount !== undefined) {
            console.log(this.crimeTypeCount);
            for(let crime in this.crimeTypeCount) {
                if(this.crimeTypeCount.hasOwnProperty(crime)) {
                    labels.push(''+crime);
                    dataValues.push(this.crimeTypeCount[crime]);
                }
            }
        this.doughnutChartData = dataValues;
        this.doughnutChartLabels = labels;
        }
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