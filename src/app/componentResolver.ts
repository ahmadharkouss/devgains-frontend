import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageMobileComponent } from './landing-page-mobile/landing-page-mobile.component';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class ComponentResolver implements Resolve<any> {
  constructor(private deviceService: DeviceDetectorService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    // Determine device type using DeviceDetectorService
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    // Determine which component to load based on device type
    return isMobile || isTablet ? LandingPageMobileComponent : LandingPageComponent;
  }
}
