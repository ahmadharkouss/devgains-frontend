import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER,TuiButtonModule} from "@taiga-ui/core";
import { Component, ChangeDetectionStrategy, ViewEncapsulation,Inject } from '@angular/core';
import {TuiAlertService} from '@taiga-ui/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule, RouterOutlet ,RouterModule, CommonModule],
  templateUrl: './landing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './landing-page.component.less',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
    encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent {
  constructor(
    @Inject(TuiAlertService) 
    private readonly alerts: TuiAlertService, private router: Router
) {
     this.alerts.open("Hello, we are still working on the website! Expected release date on 10th of May 2025",
     {
      status: 'warning',
      autoClose: false,
  }
     ).subscribe();
}

applyNow() : void {
   this.router.navigate(['/apply']).then(nav => {
    console.log(nav); // true if navigation is successful
  }, err => {
    console.log(err) // when there's an error
  });
}

  

}
