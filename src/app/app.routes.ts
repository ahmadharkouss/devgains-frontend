import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ApplyComponent } from './apply/apply.component';
import { LandingPageMobileComponent } from './landing-page-mobile/landing-page-mobile.component';
import { DeviceDetectorService } from 'ngx-device-detector';



export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'apply', component: ApplyComponent },
    { path: 'mobile', component: LandingPageMobileComponent }
];
