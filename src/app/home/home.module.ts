import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignInComponent } from "./signin/signin.component";

@NgModule({
    declarations: [SignInComponent],

    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        VmessageModule,
        RouterModule
       
         ],

    exports: [  ]
})

export class HomeModule {}