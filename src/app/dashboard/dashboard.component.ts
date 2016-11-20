import { Component, OnInit } from '@angular/core';

import { CrimeRecord } from '../crime-record/crime-record';
import { CrimeRecordService } from '../crime-record/crime-record.service';

import { ArrestCount } from '../crime-record/arrest-count';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    crimeRecords: CrimeRecord[];
    arrestCount: ArrestCount;

    constructor(private _crimeRecordService: CrimeRecordService) {

    }

    ngOnInit() {
        this.getCrimeRecords();
    }

    getCrimeRecords() {
        this._crimeRecordService.getCrimeRecords()
        .subscribe(crimeRecords => { 
            this.crimeRecords = crimeRecords
            this.arrestCount = this._crimeRecordService.getArrestCount(this.crimeRecords)
            }, error => console.log(error));
    }

    printRecords() {
        let i = 0;
        for(let crimeRecord of this.crimeRecords) {
            i++;
            console.log(i)
            console.log('Case: ' + crimeRecord.case_);
            console.log('IUCR: ' + crimeRecord._iucr);
            console.log('Arrest: ' + crimeRecord.arrest);
            console.log('Primary Description: ' + crimeRecord._primary_decsription);
            console.log('Date Of Occurence: ' + crimeRecord.date_of_occurrence);
        }
    }
}