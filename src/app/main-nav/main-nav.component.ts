import { ChangeDetectorRef, Component, ComponentRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'main-nav',
	templateUrl: './main-nav.component.html',
	styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
	@ViewChild('drawer', { static: true }) drawer!: MatSidenav;
	isHandset: boolean = false;
	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			tap((result) => this.isHandset = result.matches),
			map(result => result.matches),
			shareReplay()
		);

	constructor(private breakpointObserver: BreakpointObserver, private _changeDetectorRef: ChangeDetectorRef) { }

	ngAfterViewInit() {
		if (this.isHandset) return;
		this.$$close(); this._changeDetectorRef.detectChanges();
	}

	$$close() {
		this.drawer.close();
	}
}
