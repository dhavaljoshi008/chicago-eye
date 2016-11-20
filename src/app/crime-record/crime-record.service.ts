import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { CrimeRecord } from './crime-record';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CrimeRecordService {

    private _crimeRecordsUrl: string;
    constructor(private _http: Http) {
        this._crimeRecordsUrl = null; // Set the url.
    }

    // Get crime records
    getCrimeRecords(limit?: number) {
        return this._http.get(this._crimeRecordsUrl)
                .map((response: Response) => <CrimeRecord[]>response.json())
                .do(data => console.log(data))
                .catch(this.handleError);
    }

    // Handle error
    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error: Unable to get crime records!');
    }

}