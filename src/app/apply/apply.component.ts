import { Component,ChangeDetectionStrategy}from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Import Validators
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import {TuiInputPasswordModule} from '@taiga-ui/kit';
import {MatCardModule} from '@angular/material/card';
import anime from 'animejs';
import { first } from 'rxjs';
import {TuiCountryIsoCode} from '@taiga-ui/i18n'
import {TuiInputPhoneInternationalModule} from '@taiga-ui/kit';
import {TuiSortCountriesPipeModule} from '@taiga-ui/kit';
import {TuiDropdownModule} from '@taiga-ui/core'
import {TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiRootModule,TuiButtonModule,TUI_SANITIZER} from '@taiga-ui/core';
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {TuiFieldErrorPipeModule} from '@taiga-ui/kit';
import { TuiErrorModule } from '@taiga-ui/core';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';

import {TuiHintModule} from '@taiga-ui/core';
import { TuiHintDirective } from '@taiga-ui/core';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';


export interface ml4 {
  opacityIn: number[];
  scaleIn: number[];
  scaleOut: number;
  durationIn: number;
  durationOut: number;
  delay: number;
}
@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [TuiRootModule,TuiButtonModule,RouterOutlet, RouterModule, CommonModule, ReactiveFormsModule, TuiInputModule,  MatCardModule, TuiDropdownModule,
    TuiInputPasswordModule, TuiInputPhoneInternationalModule, TuiSortCountriesPipeModule, TuiHostedDropdownModule,
    TuiFieldErrorPipeModule,TuiErrorModule,TuiHintModule,PolymorpheusModule],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
        provide: TUI_VALIDATION_ERRORS,
        useValue: {
            required: 'Value is required!',
            email: 'Enter a valid email!',
            pattern : 'Password must contain at least 8 characters, including UPPER/lowercase and numbers'
        },
    },
    TuiHintDirective // Provide TuiHintDirective here,
],
  
})
export class ApplyComponent {
  constructor(private router: Router) {
    
  }

  readonly applyForm = new FormGroup({
    // Add email validation to testValue FormControl
    mailValue: new FormControl('', [Validators.required, Validators.email]),
    firstNameValue: new FormControl('',Validators.required),
    lastNameValue: new FormControl('',Validators.required),
    githubUserNameValue: new FormControl('',Validators.required),
    passwordValue: new FormControl('',[Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}'), Validators.required] ),
    phoneNumberValue: new FormControl('+33',),
  

  });

  countries = Object.values(TuiCountryIsoCode);
 
  countryIsoCode = TuiCountryIsoCode.FR;

  goBack():void {
    
    this.router.navigate(['/']).then(nav => {
    }, err => {
      console.log(err) // when there's an error
    });
  }

  submitForm():void {
    console.log(this.applyForm.value);
  }



  ml4: ml4 = {
    opacityIn: [0, 1],
    scaleIn: [0.2, 1],
    scaleOut: 3,
    durationIn: 800,
    durationOut: 600,
    delay: 500
  };

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

   // var textWrapper = document.querySelector('.ml2');
    //textWrapper!.innerHTML = textWrapper!.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

   
    
    anime.timeline({loop:true}) .add({
      targets: '.ml4 .letters-1',
      opacity: this.ml4.opacityIn,
      scale: this.ml4.scaleIn,
      duration: this.ml4.durationIn
    }).add({
      targets: '.ml4 .letters-1',
      opacity: 0,
      scale: this.ml4.scaleOut,
      duration: this.ml4.durationOut,
      easing: "easeInExpo",
      delay: this.ml4.delay
    }).add({
      targets: '.ml4 .letters-2',
      opacity: this.ml4.opacityIn,
      scale: this.ml4.scaleIn,
      duration: this.ml4.durationIn
    }).add({
      targets: '.ml4 .letters-2',
      opacity: 0,
      scale: this.ml4.scaleOut,
      duration: this.ml4.durationOut,
      easing: "easeInExpo",
      delay: this.ml4.delay
    }).add({
      targets: '.ml4 .letters-3',
      opacity: this.ml4.opacityIn,
      scale: this.ml4.scaleIn,
      duration: this.ml4.durationIn
    }).add({
      targets: '.ml4 .letters-3',
      opacity: 0,
      scale: this.ml4.scaleOut,
      duration: this.ml4.durationOut,
      easing: "easeInExpo",
      delay: this.ml4.delay
    }).add ({
      targets: '.ml4 .letters-4',
      opacity: this.ml4.opacityIn,
      scale: this.ml4.scaleIn,
      duration: this.ml4.durationIn
    }).add({
      targets: '.ml4 .letters-4',
      opacity: 0,
      scale: this.ml4.scaleOut,
      duration: this.ml4.durationOut,
      easing: "easeInExpo",
      delay: this.ml4.delay
    }).add({
      targets: '.ml4 .letters-5',
      opacity: this.ml4.opacityIn,
      scale: this.ml4.scaleIn,
      duration: this.ml4.durationIn
    }).add({
      targets: '.ml4 .letters-5',
      opacity: 0,
      scale: this.ml4.scaleOut,
      duration: this.ml4.durationOut,
      easing: "easeInExpo",
      delay: this.ml4.delay
    })
    .add({
      targets: '.ml4',
      opacity: 0,
      duration: 500,
      delay: 500
    });
    
    /*
    
    .add({
      targets: '.ml2 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70*i
    }).add({
      targets: '.ml2',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
    */
  
    
  }



  

}