import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignInComponent } from "./signin/signin.component";
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        HomeComponent
    ],

    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VmessageModule,
        RouterModule,
        HomeRoutingModule
       
         ],

    exports: [  ]
})

export class HomeModule {}