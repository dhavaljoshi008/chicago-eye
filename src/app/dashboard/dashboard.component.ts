import { Component, OnInit } from '@angular/core';

import { CrimeRecord } from '../crime-record/crime-record';
import { CrimeRecordService } from '../crime-record/crime-record.service';

import { ArrestCount } from '../crime-record/arrest-count';
import { CrimeTypeCount } from '../crime-record/crime-type-count';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    crimeRecords: CrimeRecord[];
    arrestCount: ArrestCount;
    crimeTypeCount: CrimeTypeCount;
    limit: number;

    constructor(private _crimeRecordService: CrimeRecordService) {
        this.crimeRecords = null;
        this.arrestCount = null;
        this.crimeTypeCount = null;
        this.limit = 1000; // Default limit.
    }

    ngOnInit() {
        this.getCrimeRecords(this.limit);
    }

    getCrimeRecords(limit: number) {
        this.limit = limit;
        this._crimeRecordService.getCrimeRecords(limit)
        .subscribe(crimeRecords => { 
            this.crimeRecords = crimeRecords;
            this.arrestCount = this._crimeRecordService.getArrestCount(this.crimeRecords);
            this.crimeTypeCount = this._crimeRecordService.getCrimeTypeCount(this.crimeRecords);
            }, error => console.log(error));
    }
}