import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignInComponent } from "./signin/signin.component";
import { SingUpComponent } from './singup/singup.component';

@NgModule({
    declarations: [
        SignInComponent,
        SingUpComponent
    ],

    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VmessageModule,
        RouterModule
       
         ],

    exports: [  ]
})

export class HomeModule {}