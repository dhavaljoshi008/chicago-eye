import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { CrimeRecord } from './crime-record'; 
import { ArrestCount } from './arrest-count';
import { CrimeTypeCount } from './crime-type-count';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CrimeRecordService {

    private _crimeRecordsUrl: string;
    constructor(private _http: Http) {
        this._crimeRecordsUrl = 'https://data.cityofchicago.org/resource/3uz7-d32j.json?$select=case_,_iucr,arrest,_primary_decsription,_secondary_description,date_of_occurrence&$order=date_of_occurrence DESC&$limit='; // Set the url.
    }

    // Get crime records
    getCrimeRecords(limit?: number) {
        return this._http.get(this._crimeRecordsUrl + limit)
                .map((response: Response) => <CrimeRecord[]>response.json())
                .do(data => console.log(data))
                .catch(this.handleError);
    }

    // Handle error
    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error: Unable to get crime records!');
    }

    getArrestCount(crimeRecords: CrimeRecord[]): ArrestCount {
        let y = 0;
        let n = 0;
        for(let crimeRecord of crimeRecords) {
            if(crimeRecord.arrest === 'Y') {
                y++;
            } else {
                n++;
            }
        }
        return new ArrestCount(y, n);
    }

    getCrimeTypeCount(crimeRecords: CrimeRecord[]) : CrimeTypeCount {
       let BATTERY = 0, ASSAULT = 0, CRIMINAL_DAMAGE = 0, OTHER_OFFENSE = 0, THEFT = 0, WEAPONS_VIOLATION = 0, CRIMINAL_TRESPASS = 0, OFFENSE_INVOLVING_CHILDREN = 0, NARCOTICS = 0, CRIM_SEXUAL_ASSAULT = 0, ROBBERY = 0, MOTOR_VEHICLE_THEFT = 0, BURGLARY = 0, DECEPTIVE_PRACTICE = 0, INTERFERENCE_WITH_PUBLIC_OFFICER = 0, PROSTITUTION = 0, SEX_OFFENSE = 0, PUBLIC_PEACE_VIOLATION = 0, KIDNAPPING = 0, HOMICIDE = 0, ARSON = 0, LIQUOR_LAW_VIOLATION = 0, GAMBLING = 0, INTIMIDATION = 0, NON_CRIMINAL = 0, STALKING = 0, CONCEALED_CARRY_LICENSE_VIOLATION = 0, OBSCENITY = 0, HUMAN_TRAFFICKING = 0,  PUBLIC_INDECENCY = 0, OTHER_NARCOTIC_VIOLATION = 0, NON___CRIMINAL = 0, NON_CRIMINAL__SUBJECT_SPECIFIED_= 0, OTHER = 0;
       for(let crimeType of crimeRecords) {
           //replace(/\(|\)/g, '_').
           let type = crimeType._primary_decsription.toUpperCase().replace(/\s/g, '_').replace(/-/g, '_').replace(/\(|\)/g, '_'); // Replace space, -, (, and ) with _
        //    let a = '(a-b)';
        //    console.log(a=a.replace(/\(|\)/g, '_').replace(/-/g, '_'));
        //console.log(type);
            switch(type) { 
                case 'BATTERY':
                    BATTERY++;
                    break;
                case 'ASSAULT':
                    ASSAULT++;
                    break;
                case 'CRIMINAL_DAMAGE':
                    CRIMINAL_DAMAGE++;
                    break;
                case 'OTHER_OFFENSE':
                    OTHER_OFFENSE++;
                    break;
                case 'THEFT':
                    THEFT++;
                    break;
                case 'WEAPONS_VIOLATION':
                    WEAPONS_VIOLATION++;
                    break;
                case 'CRIMINAL_TRESPASS':
                    CRIMINAL_TRESPASS++;
                    break;
                case 'OFFENSE_INVOLVING_CHILDREN':
                    OFFENSE_INVOLVING_CHILDREN++;
                    break;
                case 'NARCOTICS':
                    NARCOTICS++;
                case 'CRIM_SEXUAL_ASSAULT':
                    CRIM_SEXUAL_ASSAULT++;
                    break;
                case 'ROBBERY':
                    ROBBERY++;
                    break;
                case 'MOTOR_VEHICLE_THEFT':
                    MOTOR_VEHICLE_THEFT++;
                case 'BURGLARY':
                    BURGLARY++;
                    break;
                case 'DECEPTIVE_PRACTICE':
                    DECEPTIVE_PRACTICE++;
                    break;
                case 'INTERFERENCE_WITH_PUBLIC_OFFICER':
                    INTERFERENCE_WITH_PUBLIC_OFFICER++;
                    break;
                case 'PROSTITUTION':
                    PROSTITUTION++;
                    break;
                case 'SEX_OFFENSE':
                    SEX_OFFENSE++;
                    break;
                case 'PUBLIC_PEACE_VIOLATION':
                    PUBLIC_PEACE_VIOLATION++;
                    break;
                case 'KIDNAPPING':
                    KIDNAPPING++;
                    break;
                case 'HOMICIDE':
                    HOMICIDE++;
                    break;
                case 'ARSON':
                    ARSON++;
                    break;
                case 'LIQUOR_LAW_VIOLATION':
                    LIQUOR_LAW_VIOLATION++;
                    break;
                case 'GAMBLING':
                    GAMBLING++;
                    break;
                case 'INTIMIDATION':
                    INTIMIDATION++;
                    break;
                case 'NON_CRIMINAL':
                    NON_CRIMINAL++;
                    break;
                case 'STALKING':
                    STALKING++;
                    break;
                case 'CONCEALED_CARRY_LICENSE_VIOLATION':
                    CONCEALED_CARRY_LICENSE_VIOLATION++;
                    break;
                case 'OBSCENITY':
                    OBSCENITY++;
                    break;
                case 'HUMAN_TRAFFICKING':
                    HUMAN_TRAFFICKING++;
                    break;
                case 'PUBLIC_INDECENCY':
                    PUBLIC_INDECENCY++;
                    break;
                case 'OTHER_NARCOTIC_VIOLATION':
                    OTHER_NARCOTIC_VIOLATION++;
                    break;
                case 'NON___CRIMINAL':
                    NON___CRIMINAL++;
                    break;
                case 'NON_CRIMINAL__SUBJECT_SPECIFIED_':
                    NON_CRIMINAL__SUBJECT_SPECIFIED_++;
                    break;
                default:
                    OTHER++;
            }
       }
       return new CrimeTypeCount(BATTERY, ASSAULT, CRIMINAL_DAMAGE, OTHER_OFFENSE, THEFT, WEAPONS_VIOLATION, CRIMINAL_TRESPASS,  OFFENSE_INVOLVING_CHILDREN, NARCOTICS, CRIM_SEXUAL_ASSAULT, ROBBERY, MOTOR_VEHICLE_THEFT, BURGLARY, DECEPTIVE_PRACTICE, INTERFERENCE_WITH_PUBLIC_OFFICER, PROSTITUTION, SEX_OFFENSE, PUBLIC_PEACE_VIOLATION, KIDNAPPING, HOMICIDE, ARSON, LIQUOR_LAW_VIOLATION, GAMBLING, INTIMIDATION, NON_CRIMINAL, STALKING, CONCEALED_CARRY_LICENSE_VIOLATION, OBSCENITY, HUMAN_TRAFFICKING,  PUBLIC_INDECENCY, OTHER_NARCOTIC_VIOLATION, NON___CRIMINAL, NON_CRIMINAL__SUBJECT_SPECIFIED_, OTHER);
    }

    listCrimeType(crimeRecords: CrimeRecord[]) {
        let crimeType: string[] = [];
        for(let crimeRecord of crimeRecords) {
            let d = crimeRecord._primary_decsription;
            if(crimeType.indexOf(d) > -1) {

            } else {
                crimeType.push(d);
            }
        }
        let i = 0;
        for(let item of crimeType) {
            i++;
            console.log(item);
        }
    }

}