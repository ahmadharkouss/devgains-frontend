import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER,TuiButtonModule} from "@taiga-ui/core";
import { Component, ChangeDetectionStrategy, ViewEncapsulation,Inject } from '@angular/core';
import {TuiAlertService} from '@taiga-ui/core';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule],
  templateUrl: './landing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './landing-page.component.less',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
    encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent {
  constructor(
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
) {
     this.alerts.open("Hello, we are still working on the website! Expected release date on 10th of May 2025",
     {
      status: 'warning',
      autoClose: false,
  }
     ).subscribe();
}

  

}
