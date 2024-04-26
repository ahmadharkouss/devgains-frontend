import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ApplyComponent } from './apply/apply.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'apply', component: ApplyComponent }
];
