import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER,TuiButtonModule} from "@taiga-ui/core";
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

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

}
