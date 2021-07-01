import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Country } from 'src/shared/country';
import { CountryService } from 'src/shared/country.service';
import { MessageError } from 'src/shared/message-error.interface';

import { CountryDetailsComponent } from './country-details.component';

@Injectable()
class MockService {
	getCountry() {
		return of(new Country(sampleData));
	}
}

const errorData = [{ id: '120', key: 'Invalid value', value: 'The provided parameter value is not valid' }];

const sampleData = {
	id: 'BRA',
	iso2Code: 'BR',
	name: 'Brazil',
	region: {
		id: 'LCN',
		iso2code: 'ZJ',
		value: 'Latin America & Caribbean '
	},
	adminregion: {
		id: 'LAC',
		iso2code: 'XJ',
		value: 'Latin America & Caribbean(excluding high income)'
	},
	incomeLevel: {
		id: 'UMC',
		iso2code: 'XT',
		value: 'Upper middle income'
	},
	lendingType: {
		id: 'IBD',
		iso2code: 'XF',
		value: 'IBRD'
	},
	capitalCity: 'Brasilia',
	longitude: '-47.9292',
	latitude: '-15.7801'
}
describe('CountryDetailsComponent', () => {
	let component: CountryDetailsComponent;
	let fixture: ComponentFixture<CountryDetailsComponent>;
	let countryServiceSpyObj: { getCountry: jasmine.Spy } = jasmine.createSpyObj(CountryService, ['getCountry']);
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				CountryDetailsComponent
			],
			imports: [
				NoopAnimationsModule,
				HttpClientTestingModule,
				FormsModule,
				MatFormFieldModule,
				MatInputModule,
				MatSnackBarModule,
				ReactiveFormsModule
			],
			providers: [
				{
					provide: CountryService,
					useClass: MockService
				}
			]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CountryDetailsComponent);
		component = fixture.componentInstance;
		component.$$getCountry('br');
		countryServiceSpyObj.getCountry.and.returnValue(of(new Country(sampleData)));
		fixture.detectChanges();
	});

	beforeEach(async () => {
	})
	it('should create', () => {
		expect(component).toBeTruthy();
	});


	it('display country details', () => {
		expect(component.isCountry).toBeTrue();
		component.response = sampleData;
		const input = fixture.debugElement.query(By.css('input'));
		input.nativeElement.value = 'QW';
		input.triggerEventHandler('click', {});
		component.response = new MessageError(errorData);
		fixture.detectChanges();

		expect(component.isMessageError).toBeTrue();

	});

});
