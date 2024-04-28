import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Import Validators
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, ReactiveFormsModule, TuiInputModule, MatCardModule],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.less'
})
export class ApplyComponent {
  constructor(private router: Router) {
    
  }

  readonly testForm = new FormGroup({
    // Add email validation to testValue FormControl
    testValue: new FormControl('user@devgains.com', [Validators.required, Validators.email])
  });

  goBack():void {
    
    this.router.navigate(['/']).then(nav => {
    }, err => {
      console.log(err) // when there's an error
    });
  }

}