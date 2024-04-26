import { Routes } from '@angular/router';
import { ComponentResolver } from './componentResolver';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ApplyComponent } from './apply/apply.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent, resolve: { component: ComponentResolver }},
    { path: 'apply', component: ApplyComponent },
];
