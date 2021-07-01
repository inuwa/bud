import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from 'src/shared/country.service';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
	declarations: [
		AppComponent,
		MainNavComponent,
		CountryDetailsComponent
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		FormsModule,
		HttpClientModule,
		MatButtonModule,
		MatInputModule,
		MatIconModule,
		MatListModule,
		MatSidenavModule,
		MatSnackBarModule,
		MatToolbarModule,
		LayoutModule,
		ReactiveFormsModule
	],
	providers: [
		CountryService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
