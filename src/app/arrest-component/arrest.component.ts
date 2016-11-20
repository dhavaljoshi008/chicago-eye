import { Component, OnChanges, Input } from '@angular/core';

import { ArrestCount } from '../crime-record/arrest-count';

@Component({
    selector: 'arrest',
    templateUrl: './arrest.component.html',
    styleUrls: ['./arrest.component.css']
})

export class ArrestComponent implements OnChanges {
    
  @Input() arrestCount: ArrestCount;  

  // Doughnut
  doughnutChartLabels:string[];
  doughnutChartData:number[];
  doughnutChartType:string;
  
  constructor() {
      this.doughnutChartLabels = ['Arrest', 'No Arrest'];
      this.doughnutChartData = [0,0];
      this.doughnutChartType = 'doughnut';
  }

  ngOnChanges() {

      // Check whether arrestCount has been initialized. 
      if(this.arrestCount !== undefined) {
          // console.log(this.arrestCount);
          this.doughnutChartData = [this.arrestCount.yes, this.arrestCount.no];
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