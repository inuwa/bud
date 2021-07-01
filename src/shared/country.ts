import { AdminRegion } from './admin-region.interface';
import { IncomeLevel } from './income-level.interface';
import { LendingType } from './lending-type.interface';
import { Region } from './region.interface';

export class Country {
	id: string;
	iso2Code: string;
	name: string;
	region: Region;
	adminregion: AdminRegion;
	incomeLevel: IncomeLevel;
	lendingType: LendingType;
	capitalCity: string;
	longitude: string;
	latitude: string;

	constructor(country: Partial<Country>) {
		this.id = country.id!;
		this.iso2Code = <string>country.iso2Code;
		this.name = <string>country.name;
		this.region = <Region>country.region;
		this.adminregion = <AdminRegion>country.adminregion;
		this.incomeLevel = <IncomeLevel>country.incomeLevel;
		this.lendingType = <LendingType>country.lendingType;
		this.capitalCity = <string>country.capitalCity;
		this.longitude = <string>country.longitude;
		this.latitude = <string>country.latitude;
	}
}
