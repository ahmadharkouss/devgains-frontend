import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER,TuiButtonModule} from "@taiga-ui/core";
import { Component, ChangeDetectionStrategy, ViewEncapsulation,Inject } from '@angular/core';
import {TuiAlertService} from '@taiga-ui/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import {tuiFadeIn} from '@taiga-ui/core';
import anime from 'animejs';
import AOS from "aos";
import scrollmagic from 'scrollmagic';
import { DeviceDetectorService } from 'ngx-device-detector';
import {MatCardModule} from '@angular/material/card';

export interface ml4 {
  opacityIn: number[];
  scaleIn: number[];
  scaleOut: number;
  durationIn: number;
  durationOut: number;
  delay: number;
}
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule, RouterOutlet ,RouterModule, CommonModule, MatCardModule],
  templateUrl: './landing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './landing-page.component.less',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
    encapsulation: ViewEncapsulation.None,
    animations: [tuiFadeIn],
})
export class LandingPageComponent {
  constructor(
    @Inject(TuiAlertService) 
    private readonly alerts: TuiAlertService, private router: Router, private deviceService: DeviceDetectorService,
) {
  }

isMobile : boolean = false;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  AOS.init();
  this.isMobile = this.deviceService.isMobile();
  if (!this.deviceService.isMobile()) {
    this.alerts.open("Expected release date: 2nd of Jan 2025. Stay tuned!",
    {
     status: 'warning',
     autoClose: false,
 }
    ).subscribe();
   }
}




ml4: ml4 = {
  opacityIn: [0, 1],
  scaleIn: [0.2, 1],
  scaleOut: 3,
  durationIn: 800,
  durationOut: 600,
  delay: 500
};



ngAfterViewInit(): void{
  

anime.timeline({})
.add({
  targets: '.first-par-text',
  scale: [4,1],
  opacity: [0,1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 950,
  delay: (el, i) => 70*i
}) .add({
  targets: '.ml4 .letters',
  opacity: this.ml4.opacityIn,
  scale: this.ml4.scaleIn,
  duration: this.ml4.durationIn,
  delay: function(el, i) { return 450 * i; }
})


}


applyNow() : void {
   this.router.navigate(['/apply']).then(nav => {
    console.log(nav); // true if navigation is successful
  }, err => {
    console.log(err) // when there's an error
  });
}

contactNow() : void {
  window.location.href = "mailto:support@devgains.com?subject=Contact%20DevGains&body=Hello%20DevGains%20Team%2C%0A%0A";

}

  

}
