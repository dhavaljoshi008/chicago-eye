import { CrimeLocation } from './crime-record.location';

export interface CrimeRecord {
    _iucr: string, // Assuming IUCR code will be present for each record.
    _location_description: string, // Assuming location description will be present for each record.
    _primary_decsription: string, // Assuming primary description will be present for each record.
    _secondary_description?: string,
    arrest: string, // Assuming arrest information will be present for each record.
    beat?: string,
    block?: string,
    case_: string, // Assuming case number will be present for each record.
    date_of_occurrence: string, // Assuming date will be present for each record.
    domestic?: string,
    fbi_cd?: string,
    latitude?: string,
    location?: CrimeLocation,
    longitude?: string,
    ward?: string,
    x_coordinate?: string,
    y_coordinate?: string,
    location_zip?: string,
    location_city?: string,
    location_address?: string,
    location_state?: string
}