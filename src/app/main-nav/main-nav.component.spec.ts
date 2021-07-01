import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MainNavComponent } from './main-nav.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainNavComponent', () => {
	let component: MainNavComponent;
	let fixture: ComponentFixture<MainNavComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [MainNavComponent],
			imports: [
				NoopAnimationsModule,
				LayoutModule,
				MatButtonModule,
				MatIconModule,
				MatListModule,
				MatSidenavModule,
				MatToolbarModule,
				RouterTestingModule
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MainNavComponent);
		component = fixture.componentInstance;
		component.ngAfterViewInit();
		fixture.detectChanges();
	});

	it('should compile', () => {
		expect(component).toBeTruthy();
	});
});
