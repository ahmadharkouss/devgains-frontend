import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ,RouterModule, CommonModule],
  templateUrl: './root.component.html',
  styleUrl: './root.component.less'
})
export class AppComponent {

}
