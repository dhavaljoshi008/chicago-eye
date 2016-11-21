import { Component, OnInit } from '@angular/core';

import { CrimeRecord } from '../crime-record/crime-record';
import { CrimeRecordService } from '../crime-record/crime-record.service';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'crime-stats',
    templateUrl: './crime-stats.component.html',
    styleUrls: ['./crime-stats.component.css']
})

export class CrimeStatsComponent {
    
    crimeRecords: Observable<CrimeRecord[]>;
    limit: number;
    tableAttributes: string[];


    constructor(private _crimeRecordService: CrimeRecordService) {
        this.crimeRecords = null;
        this.limit = 1000; // Default limit.
    }

    ngOnInit() {
        this.getCrimeRecords(this.limit);
    }

    getCrimeRecords(limit: number) {
        this.limit = limit;
        this._crimeRecordService.getCrimeRecords(limit)
        .subscribe(crimeRecords => { 
             this.crimeRecords = Observable.of(crimeRecords);
             this.tableAttributes = ['#', 'Case Number', 'IUCR', 'Arrest', 'Primary Description', 'Secondary Description', 'Date Of Occurence'];
            }, error => console.log(error));
    }
}