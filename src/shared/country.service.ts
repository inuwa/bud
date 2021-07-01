import { KeyValue } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { Country } from './country';
import { Endpoint } from './endpoint';
import { MessageError } from './message-error.interface';

@Injectable()
export class CountryService {
	private _countryQueryParams: KeyValue<string, string>[] = [{ key: 'format', value: 'json' }];
	constructor(private _httpClient: HttpClient) { }

	getCountry(searchTerm: string): Observable<Country | MessageError | HttpErrorResponse> {
		const queryParams: string = this._buildQuery(this._countryQueryParams);
		const url: string = Endpoint.COUNTRIES.concat(searchTerm, queryParams);
		return this._httpClient.get<any[]>(url).pipe(
			map((response) => {
				if (response[0].hasOwnProperty('message')) return new MessageError(response[0].message);
				return new Country(response[1][0]);
			}),
			take(1),
			catchError(this._handleError)
		);
	}

	private _buildQuery(queryKeyValuePairs: KeyValue<string, string>[]): string {
		let qvp: string = '';
		queryKeyValuePairs.forEach((kvp, i) => {
			if (i > 0 && i < queryKeyValuePairs.length) qvp.concat('&');
			qvp += kvp.key.concat('=', kvp.value);
		});

		return '?'.concat(qvp);
	}

	private _handleError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
		return of(error);
	}
}
