import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Country } from 'src/shared/country';
import { CountryService } from 'src/shared/country.service';
import { MessageError } from 'src/shared/message-error.interface';

@Component({
	selector: 'country-details',
	templateUrl: './country-details.component.html',
	styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
	formGroup!: FormGroup;
	response!: Country | MessageError | HttpErrorResponse;

	get isMessageError(): boolean {
		return this.response instanceof MessageError;
	}

	get isCountry(): boolean {
		return this.response instanceof Country;
	}

	get country() {
		return <Country>this.response;
	}

	get messageError() {
		return <MessageError>this.response;
	}

	constructor(
		private _countryService: CountryService,
		private _snackBar: MatSnackBar,
		private _formBuilder: FormBuilder
	) { }

	ngOnInit(): void {
		this._buildForm();
	}

	$$getCountry(searchTerm: string) {
		this._countryService.getCountry(searchTerm).subscribe((response: Country | MessageError | HttpErrorResponse) => {
			if (response instanceof HttpErrorResponse) return this._snackBar.open('Error', response.statusText);
			return this.response = response;
		});
	}

	private _buildForm() {
		this.formGroup = this._formBuilder.group({
			countryCode: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)]))
		});
	}
}
