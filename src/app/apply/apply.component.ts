import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [ RouterOutlet ,RouterModule, CommonModule],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.less'
})
export class ApplyComponent {

}
