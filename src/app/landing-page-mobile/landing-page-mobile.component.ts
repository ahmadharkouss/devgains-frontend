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


@Component({
  selector: 'app-landing-page-mobile',
  standalone: true,
  imports: [TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule, RouterOutlet ,RouterModule, CommonModule],
  templateUrl: './landing-page-mobile.component.html',
  styleUrl: './landing-page-mobile.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  encapsulation: ViewEncapsulation.None,
  animations: [tuiFadeIn],
})
export class LandingPageMobileComponent {
  constructor(
    @Inject(TuiAlertService) 
    private readonly alerts: TuiAlertService, private router: Router,private deviceService: DeviceDetectorService,
) {
     
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  AOS.init();
  if (this.deviceService.isMobile()) {
    this.router.navigate(['/mobile']);
  }
}

ngAfterViewInit(): void{
  



anime.timeline({loop: false})
.add({
  targets: '.first-par-text',
  scale: [4,1],
  opacity: [0,1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 950,
  delay: (el, i) => 70*i
})


}


applyNow() : void {
   this.router.navigate(['/apply']).then(nav => {
    console.log(nav); // true if navigation is successful
  }, err => {
    console.log(err) // when there's an error
  });
}

}
