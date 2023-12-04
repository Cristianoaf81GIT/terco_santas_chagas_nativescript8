import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import {
  DrawerTransitionBase,
  RadSideDrawer,
  SlideInOnTopTransition,
} from 'nativescript-ui-sidedrawer';
import { filter } from 'rxjs/operators';
import { Application, Connectivity } from '@nativescript/core';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  private _activatedUrl: string
  private _sideDrawerTransition: DrawerTransitionBase
  private connectionType: number;
  public deviceIsConnected: boolean;

  constructor(
    private router: Router,
    private routerExtensions: RouterExtensions
  ) {
    // check device connectivity
    this.connectionType = Connectivity.getConnectionType();
    if (
      this.connectionType === Connectivity.connectionType.wifi ||
      this.connectionType === Connectivity.connectionType.mobile
    ) {
      this.deviceIsConnected = true;
    } else {
      this.deviceIsConnected = false;
    }
  }

  ngOnInit(): void {
    this._activatedUrl = '/home';
    this._sideDrawerTransition = new SlideInOnTopTransition();

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects))
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition
  }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade',
      },
    })

    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.closeDrawer()
  }

  get activatedUrl(): string {
    return this._activatedUrl;
  }
}
