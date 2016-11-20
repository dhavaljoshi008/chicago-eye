import { Component, OnInit } from '@angular/core';

import { CrimeRecord } from '../crime-record/crime-record';
import { CrimeRecordService } from '../crime-record/crime-record.service';

import { ArrestCount } from '../crime-record/arrest-count';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    crimeRecords: CrimeRecord[];

    constructor(private _crimeRecordService: CrimeRecordService) {

    }

    ngOnInit() {
        this._crimeRecordService.getCrimeRecords()
        .subscribe(crimeRecords => this.crimeRecords = crimeRecords, error => console.log(error));
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

        let ac = this._crimeRecordService.getArrestCount(this.crimeRecords);
        let y = ac.yes;
        let n = ac.no;
        console.log('Arrest Y = ' + y);
        console.log('Arrest N = ' + n);
    }
}